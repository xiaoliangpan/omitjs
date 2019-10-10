const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist/es'),
        filename: "index.js",
        library: 'omit',
        libraryTarget: "umd"
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/}
        ]
    }
}
