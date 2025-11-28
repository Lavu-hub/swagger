const url = require('url');

let adr = 'https://www.w3schools.com/nodejs/trynodejs.asp?filename=factorial.js;';
let b = url.parse(adr, true);

console.log(b.host);
console.log(b.pathname);
console.log(b.search);
console.log(b.protocol);

let qdata = b.query;
console.log(qdata.filename);