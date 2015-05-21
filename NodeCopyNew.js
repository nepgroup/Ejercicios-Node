var fs = require('fs')
var readstream = fs.createReadStream('file.txt');
var writestream = fs.createWriteStream('file-newcopy.txt');

readstream.pipe(writestream);