import * as http from 'http';
const server =http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Helo moto');
});

server.listen(3000);