const express = require('express');
const app = express();
const port = 3000;

app.get('/listar/:valor', (req, res) => {
  const valor = parseInt(req.params.valor);

  if (valor === 50) {
    res.status(404).send('HTTP 404 - Recurso não encontrado');
  } else if (valor === 10) {
    res.status(200).send('HTTP 200 - Recurso encontrado');
  } else {
    res.status(400).send('HTTP 400 - Solicitação inválida');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});