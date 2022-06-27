// import { Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import K from "./k";
import W from "./w";
import Opening from "./breviary/opening";
import Hymn from "./breviary/hymn";
import Psalm from "./breviary/psalm";
import Canticle from "./breviary/canticle";
import Reading from "./breviary/reading";
import Responsory from "./breviary/responsory";
import Benedictus from "./breviary/benedictus";
import Magnificat from "./breviary/magnificat";
import Intercessions from "./breviary/intercessions";
import Prayer from "./breviary/prayer";
import Dismissal from "./breviary/dismissal";
import Lyrics from "./lyrics";
import Toolbar from "./toolbar";

const components = {
  K,
  W,
  Opening,
  Hymn,
  Psalm,
  Canticle,
  Reading,
  Responsory,
  Benedictus,
  Magnificat,
  Intercessions,
  Prayer,
  Dismissal,
  Lyrics,
};

const Layout = ({ title, hasBackLink = true, children }) => (
  <html lang="pl">
    <head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="stylesheet" href="/styles/main.css" />
    </head>
    <body>
      <Toolbar />
      <main>
        {hasBackLink && <a href="/">&larr; Wróć do spisu treści</a>}
        <MDXProvider components={components}>{children}</MDXProvider>
        {hasBackLink && <a href="/">&larr; Wróć do spisu treści</a>}
      </main>
      <script src="/scripts/main.js" />
    </body>
  </html>
);

const makeLayout = (defaultProps) => (props) =>
  <Layout {...defaultProps} {...props} />;

export { Layout };

export default makeLayout;
