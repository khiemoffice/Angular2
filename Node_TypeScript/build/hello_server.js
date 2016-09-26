"use strict";
var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Helo moto');
});
server.listen(3000);
//# sourceMappingURL=hello_server.js.map