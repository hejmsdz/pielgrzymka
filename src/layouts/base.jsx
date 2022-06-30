import Toolbar from "../components/toolbar";

const Layout = ({
  title = "Ziemia Święta",
  bodyClassName = "empty",
  children,
}) => (
  <html lang="pl">
    <head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="manifest" href="/manifest.json" />
      <link rel="stylesheet" href="/styles/main.css" />
      <link rel="icon" href="/images/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/images/icon-192.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#bda780" />
    </head>
    <body className={bodyClassName}>
      <Toolbar />
      {children}
      <script src="/scripts/main.js" />
    </body>
  </html>
);

const makeLayout = (defaultProps) => (props) =>
  <Layout {...defaultProps} {...props} />;

export { Layout };

export default makeLayout;
