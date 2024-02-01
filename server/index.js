const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

let number = 0;

app.get('/', (req, res) => {
  console.log(number);
  res.status(200).json({ number });
  number++;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
