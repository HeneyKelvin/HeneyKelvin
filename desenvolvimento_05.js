const express = require('express');
const app = express();
const port = 3000;

// GET request
app.get('/', (req, res) => {
  res.send('Resposta para GET request');
});

// POST request
app.post('/', (req, res) => {
  res.send('Resposta para POST request');
});

// PUT request
app.put('/', (req, res) => {
  res.send('Resposta para PUT request');
});

// DELETE request
app.delete('/', (req, res) => {
  res.send('Resposta para DELETE request');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});