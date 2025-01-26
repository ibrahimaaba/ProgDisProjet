const express = require('express');
const app = express();
const port = 5000;

app.get('/api', (req, res) => {
  res.send('Hello from Backend!');
});

app.get('/', (req, res) => {
  res.send('Bienvenue sur le backend !');
});


app.listen(port, '0.0.0.0',() => {
  console.log(`Backend app listening at http://localhost:${port}`);
});