module.exports = {
    siteMetadata: {
        title: `izrael`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: `Śpiewnik`,
                short_name: `Śpiewnik`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: "src/images/icon.png"
            }
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/layout.js'),
                }
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        },
        "gatsby-plugin-react-svg",
        "gatsby-plugin-sass",
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: ['/dzien/*/*'],
            },
        },
    ]
};
