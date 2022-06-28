module.exports = {
    globDirectory: 'dist/',
    globPatterns: [
        '**/*.{html,css,js,jpg}'
    ],
    swDest: 'dist/sw.js',
    // dontCacheBustURLsMatching: /\.html$/,
    ignoreURLParametersMatching: [
        /^utm_/,
        /^fbclid$/
    ]
};
