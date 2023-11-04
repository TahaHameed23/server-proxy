import express from 'express';
// import dotenv from 'dotenv';
const app = express();
const PORT = 4000;


app.get('/api/jokes', (req,res) => {
  const jokes = [
    {
      id: 1,
      title: 'A joke',
      content: 'hahaha',
    },
    {
      id: 2,
      title: 'A joke',
      content: 'hahaha',
    },
    {
      id: 3,
      title: 'A joke',
      content: 'hahaha',
    },
    {
      id: 4,
      title: '4th joke',
      content: 'hahaha',
    },
    {
      id: 1,
      title: 'Fifth joke',
      content: 'hahaha',
    },
  ];
  res.send(jokes);
});

app.listen(PORT, () => {
  `http://localhost:${PORT}/jokes`; 
});

export default app;