/*
let hello = "Hello World from the Node JS";
console.log(hello);
let justNode = hello.slice(12);
console.log(justNode);
let justSplit = hello.split('');
console.log(justSplit);
*/

const path = require('path');
const readline = require('readline');
const fs = require('fs');




// const dir = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// console.log(dir);

// const norm1 = path.parse('/home/user/dir/file.txt');
// console.log(norm1);
// console.log("Nodemon Started");
/*
const intervalTime = 3000;
console.log('Starting a functions');
const intervalFunction = () => {
   console.log('Done');
}
setTimeout(intervalFunction, intervalTime);

setInterval
const settingInterval=1000;
let currentTime=0;
const incTime=()=>{
   currentTime += settingInterval;
   console.log(`Waiting for ${currentTime/2000} times`);
}
setInterval(incTime, settingInterval);
*/

const rl = readline.Interface({
   input: process.stdin,
   output: process.stdout
});
rl.question("What are you doing? \n", (answer) => {
   console.log(`Your answer is : ${answer}`);
});

// Fs module is used to deal with files and systems.
const files = fs.readdirSync("./");
console.log(files);
/*
fs.readFile("./", "utf-8", (err, ipsum) => {
   if (err) {
      thro"w err;
   } else {
      console.log(ipsum);
   }
})
*/
// fs.readFile("./", "UTF-8", (err, file) => {
//    if (err) {
//       throw err;
//    } else {
//       console.log(file)
//    }
// })
fs.readFile("./", "UTF-8", (err, file) => {
   if (err) {
      throw err;
   } else {
      console.log(file)
   }
})
fs.appendFileSync();

fs.mkdir();
fs.mkdir();
// We are making this change for wakatime.

