/*
let hello = "Hello World from the Node JS";
console.log(hello);
let justNode = hello.slice(12);
console.log(justNode);
let justSplit = hello.split('');
console.log(justSplit);
*/

const path=require('path');


const dir= path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
console.log(dir);

const norm1=path.parse('/home/user/dir/file.txt');
console.log(norm1);
