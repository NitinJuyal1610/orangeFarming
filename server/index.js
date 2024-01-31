import express from 'express';

import csvToJson from 'csvtojson';
const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Server is up!' });
});

app.get('/getData', async (req, res) => {
  const jsonArray = await csv().fromFile(csvFilePath);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
