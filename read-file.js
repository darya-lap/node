var fs = require('fs'); // module for file system
//var content = fs.readFileSync('file.txt');
fs.readFile('file.txt', function(err, content){
	console.log(decodeURIComponent(content));
});

console.log('The end');
