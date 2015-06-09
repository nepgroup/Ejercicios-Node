var http = require('http');
var fs = require('fs');
var file = '';

var server = http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    
    // utilizando fs.createReadStream 
    // leer un archivo y escribirlo en el stream response
	// stream.on('data', function(data) {
	//    	response.write(file += data.toString());
	// });

	// stream.on('end', function(data) {
	//    	response.end();
	// });

	var stream = fs.createReadStream('file.txt');
	stream.pipe(response);
});

server.listen(8000, function() {
    console.log('ahora si estoy escuchando');
});