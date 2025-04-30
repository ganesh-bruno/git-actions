const { postmanToBruno } = require('@usebruno/converters');
const { readFile, writeFile } = require('fs/promises');

async function convertPostmanToBruno(inputFile, outputFile) {
 try {
  const inputData = await readFile(inputFile, 'utf8');
  const brunoCollection = postmanToBruno(JSON.parse(inputData));
  console.log('Conversion successful!');
  await writeFile(outputFile, JSON.stringify(brunoCollection, null, 2));
 } catch (error) {
 console.error('Error during conversion:', error);
 }
}

convertPostmanToBruno('./demo_collection.postman_collection.json', 'hi.json');