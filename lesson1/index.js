const {exp, create} = require('../lesson1/dir/file');
let fs = require('fs');
let path = require('path');
let s = path.join(process.cwd(), 'dir', 'user1901.txt');
let newPath = path.join(process.cwd(), 'dir', 'newUser.txt');
// fs.mkdir(path.join(process.cwd(), 'text', 'users'), {recursive: true}, err => console.log(err));
let s1 = path.join(process.cwd(), 'text', 'users','user.txt');
//let s2 = path.join(process.cwd(), s1, 'user.txt');
console.log(s);
// fs.writeFile(s, 'Hello world', err => console.log(err));
// fs.appendFile(s, 'Hello', err => console.log(err));
// fs.writeFile(s1, 'Fuck Off', err => console.log(err));
// fs.rmdir(path.join(process.cwd(), 'text', 'users'), {recursive: true}, err => console.log(err));
fs.readdir(path.join(process.cwd(),'dir'), (err, files) => {
   if (err){
       console.log(err);
   }
   else {
       files.forEach(file => {
           fs.stat(path.join(process.cwd(), 'dir', file), (err1, stats) => {
               if (err1){
                   console.log(stats.isDirectory());
                   console.log(stats);
               }
           })
       });
   }
});
// fs.rename(s, newPath, err => console.log(err));
// 0
    const readStream = fs.createReadStream(s);
    let writeStream = fs.createWriteStream(newPath);
    readStream.on('data', (chunk) => {
        console.log(chunk);
        console.log('****************');
    });
    writeStream.write('TEST');
//fs.unlink(s, err => console.log(err));
// console.log(exp);
// global.xxx = 'XXX';
// console.log(create("Huiktor", 29));
// console.log("!!!!!!!!!!!!!");
// console.log('_____________________________________');
// console.log(__dirname);
// console.log(__filename);
// console.log(global.framework);
// console.log(process.env);
// console.log(process.cwd());
// console.log('_______________________________________');
