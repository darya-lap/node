var fs = require('fs');

 
 //file.on('data', function(txt){
	 //console.log(txt.toString());
	 //process.stdout.write(txt.toString());
 //});
 
 //file.pipe(process.stdout);
 
var http = require('http').createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'image/jpg'});
	var file = fs.createReadStream('1.jpg');
	file.pipe(res);
}).listen(8080);