module.exports = {
    globDirectory: 'dist/',
    globPatterns: [
        '**/*.{html,css,js}'
    ],
    swDest: 'dist/sw.js',
    dontCacheBustURLsMatching: /\.html$/,
    ignoreURLParametersMatching: [
        /^utm_/,
        /^fbclid$/
    ]
};
