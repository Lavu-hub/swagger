const fs = require('fs').promises;

fs.appendFile('veer.txt', 'Hello, Veer!', 'utf8')
  .then(() => {
    console.log('Data appended successfully');
  })
  .catch((err) => {
    console.error('Error appending data:', err);
  });


async function writeFileExample() {
  try {
    // Write text to a file
    await fs.writeFile('myfile.txt', 'Hello, World!', 'utf8');

   
    console.log('Files created successfully');
  } catch (err) {
    console.error('Error writing files:', err);
  }
}

writeFileExample();