import { MDXProvider } from "@mdx-js/react";
import { Layout as BaseLayout } from "./base";
import K from "../components/k";
import W from "../components/w";
import Opening from "../components/breviary/opening";
import Hymn from "../components/breviary/hymn";
import Psalm from "../components/breviary/psalm";
import Canticle from "../components/breviary/canticle";
import Reading from "../components/breviary/reading";
import Responsory from "../components/breviary/responsory";
import Benedictus from "../components/breviary/benedictus";
import Magnificat from "../components/breviary/magnificat";
import Intercessions from "../components/breviary/intercessions";
import Prayer from "../components/breviary/prayer";
import Dismissal from "../components/breviary/dismissal";
import Lyrics from "../components/lyrics";

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

const Layout = ({ children, ...props }) => (
  <BaseLayout {...props}>
    <main>
      <a href="/">&larr; Wróć do spisu treści</a>
      <MDXProvider components={components}>{children}</MDXProvider>
      <a href="/">&larr; Wróć do spisu treści</a>
    </main>
  </BaseLayout>
);

const makeLayout = (defaultProps) => (props) =>
  <Layout {...defaultProps} {...props} />;

export { Layout };

export default makeLayout;
