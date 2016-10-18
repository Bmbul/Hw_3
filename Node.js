
const http = require("http");

const server = http.createServer(function(req,res){
if (req.url==="/shit"){
	res.writeHead(200);
	res.end('Shit!!');

}
else if  (req.url==="/what"){
	res.writeHead(200);
	res.end('Inch!!?');
}

else if  (req.url==="/when"){
	res.writeHead(200);
	res.end('erb!!?');
} 

else if  (req.url==="/who"){
		res.writeHead(200);
	res.end('Ov!!?');
}

else if  (req.url==="/and"){
		res.writeHead(200);
	res.end('U ev ev');
}

else if (req.url==="/but"){
		res.writeHead(200);
	res.end('Bayc ev any u amenayniv');
}
	else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("Nope!");
    }
	
});    

server.listen(8080);