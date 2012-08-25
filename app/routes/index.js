//Express and Node.js Hello World

/*
 * 
 * This function returns the classic "Hello World" message on the client and the console.
 *  
 * Esta funcion retorna  el clasico mensaje "Hello World" (Hola mundo) al cliente y a la consola.
*/

exports.hello = function(request,response){
	response.render('layout.jade', {title: 'Hello World', content: 'Hello from Jade'});
};

//De aquí en adelante, la programación del Servicio


var Loan = require('../models/loan.js');

exports.loans_create = function(request,response){
	console.log('CREATING LOAN');
	new Loan(request.body).save();
	response.writeHead(200);
	response.end("OK");
};

exports.loans_read = function(request,response){
	console.log('READING LOAN');
	Loan.findOne({_id:request.params.id}, function(error,loan){
		response.statusCode = 200;
		response.setHeader('Content-Type','application/json');
		response.send(loan);
	});
};

exports.loans_update = function(request,response){
	console.log('UPDATING LOAN');
	fields = request.body;
	fields.last_update = Date.now();
	Loan.update({_id:request.params.id}, request.body, function(error, loan){
		response.statusCode = 200;
		response.setHeader('Content-Type','application/json');
		response.send(loan);
	});
};

exports.loans_delete = function(request,response){
	console.log('DELETING LOAN');
	Loan.remove({_id:request.params.id}, request.body, function(error, loan){
		response.statusCode = 200;
		response.setHeader('Content-Type', 'application/json');
		response.end();
	});
};

exports.loans = function(request,response){
	console.log('LISTING LOANS');
	Loan.find(function(err,loans){
		response.statusCode = 200;
		response.setHeader('Content-Type','application/json');
		response.send(loans);
	});
};
