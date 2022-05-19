const translate = require('@vitalets/google-translate-api');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 1234;

app.use(cors());

app.options('*', cors());

app.get('/', async (req, res) => {
  const params = ['from', 'to', 'text'];

  if (!req.query || (req.query && Object.keys(req.query).length === 0)) {
    res.send('Null');
  }

  const { from = 'auto', to = 'vi', text = 'Hello world' } = req.query;

  const data = await translate(text, {
    from,
    to,
  });

  res.send({ text: data.text });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
