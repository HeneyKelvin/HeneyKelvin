const {criarServer} = require("http");
const PORTA = process.env.PORT || 8080;
const servidor = criarServer();
servidor.on("request", (request, response) => {
	response.end("Olá Mundo!");
});
servidor.listen(PORT, ()=> {
	console.log('servidor iniciado na porta ${PORTA}');
});