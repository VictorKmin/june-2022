const fs = require('node:fs');
const builder = require('./stude/createStudent');

// fs.readFile('./text.txt', (err, data) => {
//   console.log(err, 'ERR');
//
//   console.log(data.toString());
// });
//
// fs.appendFile('./text.txt', 'HELLO CHAT \n', (err) => {
//   console.log('ERR', err);
// })
//
// fs.writeFile('./text.txt', 'WRITE FILE', (err) => {
//   console.log('ERR', err)
// })
//
// fs.readFile('./text.txt', (err, data) => {
//   fs.appendFile('./copy.txt', data, () => {})
// })
//
// fs.mkdir('./students', (err) => {
//   console.log(err);
// })
//
// fs.appendFile('./students/data.json', JSON.stringify({name: 'Dima'}), (err) => {
//   console.log(err);
// })
//
// fs.truncate('./copy.txt', (err) => {
//   console.log(err);
// })
//
// fs.unlink('./copy.txt', (err) => {
//   console.log(err);
// })
//
// fs.rmdir('./students', { recursive: true }, err => {
//   console.log(err);
// })
//
// fs.rename('./text.txt', './users.js', (err) => {
//   console.log(err);
// })
//
// fs.rename('./users.js', './stude/users.json', (err) => {
//   console.log(err);
// });
//
// fs.rename('./stude/users.json', './users.json', (err) => {
//   console.log(err);
// });
//
// fs.copyFile('./users.json', './copy.json', err => {
//   console.log(err);
// })
//
// fs.appendFile('./dasha.txt', 'My name is Darinka', err =>  {
//   console.log(err);
// })

fs.readdir('./stude', (err, files) => {
  console.log(files);

  for (const fileName of files) {
    fs.stat(`./stude/${fileName}`, (err1, stats) => {
      console.log('___________');
      console.log(`./stude/${fileName}`);
      console.log(stats.isDirectory());

      if (stats.isFile()) {
        fs.readFile(`./stude/${fileName}`, (err2, data) => {
          console.log(data.toString());
        });
      }
    })
  }
});

fs.readdir('./stude', { withFileTypes: true }, (err, files) => {
  console.log(files);

  for (const file of files) {
    console.log(file.isFile());
  }
});

// console.log(builder);
//
// let student1 = builder.studentBuilder('Sonya', 16);
//
// console.log(student1.age);
// console.log(student1.name);
