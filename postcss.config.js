module.exports = {
    plugins: [
        require('postcss-easy-import')({
            path: ["src/css"]
        }),
        require('precss'),
        require('autoprefixer'),
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}

// module.exports = {
//     plugins: [
//         'postcss-easy-import',
//         'precss',
//         'autoprefixer',
//         'tailwindcss',
//         'autoprefixer',
//     ]
// }