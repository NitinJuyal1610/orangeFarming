import express, { json } from 'express';

import path from 'path';
import process from 'process';
import cors from 'cors';

import csv from 'csvtojson';
import { sampling } from './utils/sampling_algo.js';

const app = express();

app.use(cors());
app.get('/', (req, res) => {
  return res.json({ message: 'Server is up!' });
});

app.get('/api/getData', async (req, res) => {
  const csvFilePath = path.join(process.cwd(), 'dataset.csv');
  const response = await csv().fromFile(csvFilePath);

  const jsonArray = response.map((item) => {
    return {
      Timestamp: item['Timestamp'],
      Profit_Percentage: Number(item['Profit Percentage']),
    };
  });
  // apply sampling algorithm
  const reducedRep = sampling(jsonArray, 5, 1.0);
  return res.status(200).json(reducedRep);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
