const {criarServer} = require("http");
const PORTA = process.env.PORT || 8080;
const servidor = criarServer();
const express = require('express');
const app = express();
app.get('/usuarios/', function(req, res){
	res.send('callback post')
})
app.post('/usuarios', function(req, res){
	res.send('callback post')
})
servidor.on("request", (request, response) => {
	response.end("Olá Mundo!");
});
servidor.listen(PORT, () => {
	console.log('servidor iniciado na porta ${PORTA}');
});