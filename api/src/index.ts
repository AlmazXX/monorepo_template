import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { port } from './config';

const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log('We are live on %d', port);
})
