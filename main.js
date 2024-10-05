const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const birthdayMessage = "<h1>VERSÃO TOPZEIRA DE TESTE!</h1> ";

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(birthdayMessage);
    } else if (req.url === '/health'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("ok");
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Rota não encontrada');
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
