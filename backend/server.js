import express from 'express';
// import { jokes } from './api/jokes.js';
// import dotenv from 'dotenv';
const app = express();
const PORT = 4000;

app.get('/', (req,res) => {
  res.send('Hello');
});
app.get('/api/jokes', (req,res) => {
  res.send(jokes);
});

app.listen(PORT, () => {
  `http://localhost:${PORT}/jokes`; 
});

export default app;