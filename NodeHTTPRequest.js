var http = require("http");

var postData = {
     'user': 'Nicolas Pessolani'
};

var options = {
  hostname: '172.16.42.129',
  port: 8000,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

var req = http.request(options, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log(chunk);
  });
});

req.write(JSON.stringify(postData));
req.end();