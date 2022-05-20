const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path[, options], callback)
// Commented out to make writeFile work
fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
  if (err) throw err;
  console.log('Folder created`');
});

// Create and write to file
// Create and append commented out for read file
fs.writeFile(
  path.join(__dirname, 'test', 'hello.txt'),
  'Hello World!',
  (err) => {
    if (err) throw err;
    console.log('File written to...');

    // Append file example
    fs.appendFile(
      path.join(__dirname, 'test', 'hello.txt'),
      ' I love Node.js',
      (err) => {
        if (err) throw err;
        console.log('File written to...');
      }
    );
  }
);

// Overwrites file
// Commented out to show appendfile example
fs.writeFile(
  path.join(__dirname, 'test', 'hello.txt'),
  'I love Node.js',
  (err) => {
    if (err) throw err;
    console.log('File written to...');
  }
);

// Read file
// Commented out for Rename file
fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Rename file
// second parameter is new name
fs.rename(
  path.join(__dirname, 'test', 'hello.txt'),
  path.join(__dirname, 'test', 'helloworld.txt'),
  (err, data) => {
    if (err) throw err;
    console.log('File renamed...');
  }
);
