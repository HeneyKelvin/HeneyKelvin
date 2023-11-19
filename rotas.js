const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Esta é a rota estática!');
});

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Esta é a rota dinâmica para o usuário com ID ${userId}`);
});

app.get('/product', (req, res) => {
  const productId = req.query.id;
  if (!productId) {
    res.send('Por favor, forneça um ID de produto na query.');
  } else {
    res.send(`Esta é a rota dinâmica para o produto com ID ${productId}`);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});