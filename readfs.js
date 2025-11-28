const fs= require('fs');
fs.readFile('loveleen.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});



fs.appendFile('loveleen.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error appending file:', err);
    return;
  }
  console.log('File content:', data);
});


