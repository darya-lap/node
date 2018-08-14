 var http = require('http').createServer().listen(8080);
  var fs = require('fs');
 
http.on('request', function(req, res){
	res.writeHead(200);
	var newFile = fs.createWriteStream('file-3.txt');
	//req.pipe(newFile);
	
	req.on('data', function(txt){
		txt = 'NEW: ' + txt;
		var buffer = newFile.write(txt); //false если буффер полный
		if(!buffer) {
			console.log('pause');
			req.pause();
		}
		
	});
	newFile.on('drain', function(){
		req.resume();
	});
	
	
	req.on('end', function(){
		res.end('UPLOADED!');
	});
});
