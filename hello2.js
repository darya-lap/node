var http = require('http');
var server = http.createServer().listen(8080);

server.on('request', function(req, res){
	res.writeHead(200);
	res.write('Hello');
});

server.on('request', function(req, res){
	res.write('Request; ')
	res.write(req.method)
	res.write(req.url);
	res.end('Pam Pam');
});

server.on('connection', function(){
	console.log('connected');
});

server.on('close', function(){
	console.log('closed');
});

server.on('listening', function(){
	console.log('Listen 8080');
});