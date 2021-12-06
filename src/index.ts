import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/version', (req, res) => {
  res.json({ version: '1.0.0' });
});

app.get('/api/ping', (req, res) => {
  res.json({ resp: 'pong' });
});

const port = 3000;

app.listen(port, () => {
  console.log(new Date(), `server listening on ${port}`);
});
