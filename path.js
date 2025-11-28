const path = require('path');

console.log('Directory name:', __dirname);

console.log('File name:', __filename);

const configPath = path.join(__dirname, 'config', 'url.js');
console.log('Config file path:', configPath);

console.log('Directory using path.dirname():', path.dirname(__filename));