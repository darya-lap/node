 var http = require('http').createServer().listen(8080);
 
http.on('request', function(req, res){
	res.writeHead(200);
	res.write('START');
	setTimeout(function(){
		res.write('FINISH');
		//res.end();
	}, 3000);
	
	//get POST

	req.pipe(res);
	
	/*req.on('data', function(msg){
		console.log(msg.toString());
		//process.stdout.write(msg.toString());
	});
	
	req.on('end', function(){
		res.end();
	});*/
});

