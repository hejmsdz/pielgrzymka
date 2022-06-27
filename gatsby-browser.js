const React = require("react");
const { default: PreloadingProvider } = require("./src/components/preloading-provider");
const { default: ThemeProvider } = require("./src/components/theme-provider");

exports.wrapRootElement = ({ element }) => {
    return (
        <PreloadingProvider>
            <ThemeProvider>
                {element}
            </ThemeProvider>
        </PreloadingProvider>
    )
}
