import React from "react"
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
import '../styles/main.scss';

const shortcodes = { K, W, Opening, Hymn, Psalm, Canticle, Reading, Responsory, Benedictus, Magnificat, Intercessions, Prayer, Dismissal }
export default function Layout({ children }) {
    return (
        <MDXProvider components={shortcodes}>
            <main>
                <a href="/">&larr; Wróć do spisu treści</a>
                {children}
                <a href="/">&larr; Wróć do spisu treści</a>
            </main>
        </MDXProvider>
    )
}
