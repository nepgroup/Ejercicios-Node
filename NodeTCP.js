var net = require('net');

var ENTER = String.fromCharCode(13);
var CTRLC = String.fromCharCode(3);


var clientes = [];

var server = net.createServer(function(socket) {
		// esto se ejecuta por cada conexión nueva

		console.log(socket.remoteAddress);

		// telnet específico
		var echoReceived = false;
		console.log('Se conectó un cliente.');
		var buf = Buffer(6);
		buf[0] = 255; // IAC
		buf[1] = 251; // WILL
		buf[2] = 3; // SUPPRESS_GO_AHEAD
		socket.write(buf);
		///////


		socket.write('bienvenido\n');
		clientes.push(socket);

		var mensaje = '';
		socket.on('data', function(data) {
				if(data[0] > 127) {
						echoReceived = true;
						socket.setEncoding('utf8');
						return;
				}

				if (data.indexOf(CTRLC) !== -1) {
						console.log('Se recibió CTRL+C de un cliente.');
						socket.destroy();
				}
				if (data.indexOf(ENTER) !== -1) {
						//el cliente presionó enter
						mensaje += data;
						console.log('Cliente '+ socket.remoteAddress + ' dice: ' + mensaje);


						// retransmitir a todos los clientes conectados
						// tengo que evitar retransmitir al socket que me envió el mensaje
						clientes.forEach(function(cliente){
							if (cliente !== socket) {
								cliente.write('Cliente '+ socket.remoteAddress + ' dice: ' + mensaje + '\n');
							};
						});

						mensaje = '';
				} else {
						mensaje += data;
				}

		});

		socket.on('close', function(){
			var cliente = clientes.indexOf(socket);
			if (cliente === true) {
				clientes.split(cliente, 0);
			};

			console.log('Alguien se fue:'+ cliente);
		});

		// tengo que escuchar el evento 'close' para sacar 
		// el objeto inválido del array clientes
});



server.listen(8000, function() {
		console.log('estoy escuchando en el 8000');
});