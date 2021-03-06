var http = require('http');

var server = http.createServer().listen(8080);

server.on('request', function(req, res){
	var x = require('url').parse(req.url, true);
	console.log(x);
	console.log('Request: ', req.method, req.url);
	console.log('Status: ', res.statusCode);
});

server.on('request', function(req, res){
	if(req.url == '/stop'){
		req.connection.destroy();
		//res.writeHead(200, {'Connection':'close'});
		server.close();
	}else{
		res.writeHead(200);
	res.write('Hello from Node js');
	res.end();
	}
	
});

server.on('listening', function(){
	console.log('Listening on 8080');
});

server.on('connection', function(){
	console.log('Connect...');
});

server.on('close', function(){
	console.log('The end');
});


