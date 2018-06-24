const path = require('path');

module.exports = {
    entry: './src/player.js',
    output: {
        filename: 'player.js',
        path: path.resolve('./build/js')
    },
    resolve: {
        modules: [
            'node_modules',
            '.'
        ]
    }
}