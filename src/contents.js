export const labels = {
    jutrznia: 'Jutrznia',
    msza: 'Msza Święta',
    nieszpory: 'Nieszpory',
};

const defaultLinks = ['jutrznia', /* 'msza', */ 'nieszpory'];

export const days = [
    {
        number: 1,
        links: ['nieszpory'],
    },
    {
        number: 2,
    },
    {
        number: 3,
        links: ['jutrznia'],
    },
].map(day => ({
    ...day,
    links: (day.links || defaultLinks).map(key => ({
        key,
        label: labels[key],
        path: `/dzien/${day.number}/${key}.html`,
    })),
}));
