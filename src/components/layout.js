import React from "react"
import { Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react"
import K from "./k"
import W from "./w"
import Opening from "./breviary/opening"
import Hymn from "./breviary/hymn"
import Psalm from "./breviary/psalm"
import Canticle from "./breviary/canticle"
import Reading from "./breviary/reading"
import Responsory from "./breviary/responsory"
import Benedictus from "./breviary/benedictus"
import Magnificat from "./breviary/magnificat"
import Intercessions from "./breviary/intercessions"
import Prayer from "./breviary/prayer"
import Dismissal from "./breviary/dismissal"
import Lyrics from "./lyrics"
import Toolbar from "./toolbar";
import '../styles/main.scss';

const shortcodes = { K, W, Opening, Hymn, Psalm, Canticle, Reading, Responsory, Benedictus, Magnificat, Intercessions, Prayer, Dismissal, Lyrics }
export default function Layout({ children }) {
    return (
        <MDXProvider components={shortcodes}>
            <main>
                <Toolbar />
                <Link to="/">&larr; Wróć do spisu treści</Link>
                {children}
                <Link to="/">&larr; Wróć do spisu treści</Link>
            </main>
        </MDXProvider>
    )
}
