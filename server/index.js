import express from 'express';

import path from 'path';
import process from 'process';

import csv from 'csvtojson';
import { sampling } from './utils/sampling_algo.js';
const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Server is up!' });
});

app.get('/getData', async (req, res) => {
  const csvFilePath = path.join(process.cwd(), 'dataset.csv');
  const jsonArray = await csv().fromFile(csvFilePath);

  // apply sampling algorithm

  const reducedRep = sampling(jsonArray);
  return res.status(200).json({
    data: reducedRep,
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
