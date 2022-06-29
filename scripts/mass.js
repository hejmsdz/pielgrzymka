require('dotenv').config();
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { Client: NotionClient } = require("@notionhq/client");
const { writeFileSync } = require('fs');
const { join: joinPath } = require('path');
const {
    GOOGLE_SHEET_ID,
    GOOGLE_API_KEY,
    NOTION_DB_ID,
    NOTION_API_KEY,
} = process.env;

async function getTitles() {
    const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID);

    await doc.useApiKey(GOOGLE_API_KEY);

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells('D4:H11');

    const rowOffset = 2;
    const colOffset = 3;

    const allTitles = [];

    for (let day = 1; day <= 8; day++) {
        const titles = [];
        for (let item = 0; item < 5; item++) {
            const title = sheet.getCell(day + rowOffset, item + colOffset).value;
            if (title) {
                titles.push(...title.split('/'));
            }
        }
        allTitles.push({ day, titles });
    }

    return allTitles;
}

async function getLyrics(flatTitles) {
    const notion = new NotionClient({ auth: NOTION_API_KEY });
    const lyrics = {};

    const pages = await Promise.all(flatTitles.map(async title => {
        const { results } = await notion.databases.query({
            database_id: NOTION_DB_ID,
            filter: {
                title: { equals: title },
                property: 'Tytuł',
            },
        });

        if (!results.length) {
            throw new Error(`Unknown title: ${title}`);
        }

        return { title, pageId: results[0].id };
    }))

    await Promise.all(pages.map(async ({ title, pageId }) => {
        const { results: blocks } = await notion.blocks.children.list({
            block_id: pageId,
            page_size: 100,
        });

        const namedVerses = {};

        const verses = blocks.map(block => {
            try {
                const text = block.paragraph.rich_text[0].plain_text;
                const namedVerseMatch = text.match(/^\[(\w+)\] /);
                if (namedVerseMatch) {
                    const name = namedVerseMatch[1];
                    const rest = text.slice(namedVerseMatch[0].length);
                    namedVerses[name] = rest;

                    return rest;
                }

                if (text.startsWith('%') && namedVerses[text.slice(1)]) {
                    return namedVerses[text.slice(1)];
                }

                return text;
            } catch (error) {
                // throw new Error(`Failed to parse lyrics for ${title}: ${error.message} ${JSON.stringify(block)}`);
                return '//';
            }
        }).filter(verse => !verse.startsWith('//'))
            .map(verse => verse.replaceAll(' * ', '\n'));

        lyrics[title] = verses;
    }));

    return lyrics;
}

async function main() {
    const titlesByDay = await getTitles();
    const flatTitles = titlesByDay.flatMap(day => day.titles);
    const lyrics = await getLyrics(flatTitles);

    titlesByDay.forEach(({ day, titles }) => {
        let mdx = `import makeLayout from "../../../layouts/content";
export const layout = makeLayout();

# Msza Święta\n\n`;
        titles.forEach(title => {
            mdx += `## ${title}\n`;
            mdx += `<Lyrics verses={${JSON.stringify(lyrics[title], null, 2)}} />\n\n`;
        });

        writeFileSync(joinPath(__dirname, '../src/pages/dzien', `${day}`, 'msza.html.mdx'), mdx);
    });
}

main();
