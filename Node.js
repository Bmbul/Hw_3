
/*const http = require("http");
const fs = require("fs");

const sm = http.createServer(function(req,res){
if (req.url==="/shit"){
	res.writeHead(200);
	res.end('Shit');

}
/*if else(){

}


if else (){

} 

};    );

sm.listen(8080,function{
console.log("shit is working");});*/
// Routing

const http = require('http');

const httpServer = http.createServer(function(req, res) {

    if(req.url === '/hello') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hello World\n');
    } else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("Nope!");
    }
});

httpServer.listen(3001); // start listening on port 3001

// ... maybe we should use a framework ...