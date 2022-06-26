const React = require("react")
const { default: ThemeProvider } = require("./src/components/theme-provider");

exports.wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider>
            {element}
        </ThemeProvider>
    )
}
