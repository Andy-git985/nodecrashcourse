const path = require('path')

// Base file name
console.log(path.basename(__filename));
// path_demo.js

// Directory name
console.log(path.dirname(__filename));
console.log(__dirname);
// returns dir name but __dirname does the same thing

// File extension
console.log(path.extname(__filename));
// .js

// Create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);
// return object
// {
//   root: 'C:\\',
//   dir: 'C:\\e\\2022\\javascript\\nodecrashcourse\\reference',
//   base: 'path_demo.js',
//   ext: '.js',
//   name: 'path_demo'
// }

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));
// C:\e\2022\javascript\nodecrashcourse\reference\test\hello.html
