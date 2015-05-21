var fs = require('fs')
var stream = fs.createReadStream('file.txt');
var file = ''; 

stream.on('data', function(data) {
	file += data.toString();
});

stream.on('end', function() {
	fs.writeFile('file-copy.txt', file, function (err) {
	if (err) throw err;
		console.log('It\'s saved!');
	});
});