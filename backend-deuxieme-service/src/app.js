const express = require('express');
const app = express();
const port = 4000;

app.get('/deuxieme', (req, res) => {
  res.send('Hello from Backend Deuxième Service!');
});

app.listen(port, () => {
  console.log(`Backend Deuxième Service listening at http://localhost:${port}`);
});