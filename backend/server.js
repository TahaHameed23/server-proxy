import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//   res.send({ message: 'hello' });
// });

app.get('/jokes', () => {
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

app.listen(3000, () => {
  'http://localhost:3000/jokes';
});
