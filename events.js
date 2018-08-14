var event = require('events').EventEmitter;
var logger = new event();
var users = [], msgs = [];

logger.on('login', function(name){
	console.log('New user: ', name);
	users.push(name);
});

logger.on('message', function(msg){
	console.log('New message: ', msg);
	msgs.push(msg);
});

logger.on('getUsers', function(){
	console.log('-----------\nUsers:\n-----------');
	console.log(users.join('\n'));
});

logger.on('getMsgs', function(){
	console.log('-----------\nMessages:\n-----------');
	console.log(msgs.join('\n'));
});


logger.emit('login', 'John');
logger.emit('message', 'Hello from Jphm');
logger.emit('login', 'Mike');
logger.emit('message', 'Hello from Mike');
logger.emit('getUsers');
logger.emit('getMsgs');

//var test = new EventEmitter();
//test.on('myEvent', onMyEvent);

//function onMyEvent(param){
//	console.log(param.name, param.age);
	//console.log(arguments[0]);
//}

//test.emit('myEvent', {name:'John', age: 25});
//test.emit('myEvent', 'one', 'two');
//test.emit('myEvent', 'Test 2');