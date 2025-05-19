import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.post('/api/register', (req, res) => {
  const { fullName, email, password } = req.body;
  db.query('INSERT INTO consumer (full_name, email, password) VALUES (?, ?, ?)',
    [fullName, email, password],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send('User registered');
    });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM consumer WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length && results[0].password === password) {
      res.send(results[0]);
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

app.get('/api/items', (req, res) => {
  db.query('SELECT * FROM item', (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});