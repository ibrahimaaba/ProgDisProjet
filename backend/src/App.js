require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const app = express();

const PORT = process.env.PORT || 5000;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;

console.log(`Database host: ${DB_HOST}`);
console.log(`Database user: ${DB_USER}`);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/api', (req, res) => {
  res.send('Hello from Backend!');
});

app.get('/', (req, res) => {
  res.send('Bienvenue sur le backend !');
});

app.listen(port, '0.0.0.0',() => {
  console.log(`Backend app listening at http://localhost:${port}`);
});

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'mysql', // Nom du service Kubernetes ou localhost si Docker
  user: process.env.DB_USER || 'myuser',
  password: process.env.DB_PASSWORD || 'mypassword',
  database: process.env.DB_NAME || 'mydatabase',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL!');
});

app.get('/courses', (req, res) => {
  connection.query('SELECT * FROM courses', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Erreur lors de la récupération des cours.' });
    }
    res.json(results);
  });
});

app.get('/courses/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM courses WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Erreur lors de la récupération du cours.' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Cours non trouvé.' });
    }
    res.json(results[0]);
  });
});

app.post('/courses', (req, res) => {
  const { title, description, price } = req.body;
  const query = 'INSERT INTO courses (title, description, price) VALUES (?, ?, ?)';
  connection.query(query, [title, description, price], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Erreur lors de l\'ajout du cours.' });
    }
    res.status(201).json({ message: 'Cours ajouté avec succès.', id: results.insertId });
  });
});


app.put('/courses/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, price } = req.body;
  const query = 'UPDATE courses SET title = ?, description = ?, price = ? WHERE id = ?';
  connection.query(query, [title, description, price, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Erreur lors de la modification du cours.' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Cours non trouvé.' });
    }
    res.json({ message: 'Cours modifié avec succès.' });
  });
});


app.delete('/courses/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM courses WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Erreur lors de la suppression du cours.' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Cours non trouvé.' });
    }
    res.json({ message: 'Cours supprimé avec succès.' });
  });
});

module.exports = connection;