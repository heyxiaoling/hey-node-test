let  http = require('http');

http
	.createServer(function(req,res){
		res.writeHead(200,{'Content-type': 'text/plain'});
        res.write('hello');
        res.end();
	})
	.listen(4000)