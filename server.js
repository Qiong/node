

var http = require ("http");
var url = require("url");
//var sys = require('sys');
var ping = require('./lib/ping');
var sys = require('util')

http.createServer(function(request, response) {
	//response.writeHead(200, {"Content-Type": "text/plain"});
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<!DOCTYPE html>");
	response.write("<html>");
	response.write("<body>");
	response.write("<form method= 'GET' action='/PING'>")
	response.write("IP Address: <input type='text' name='IP' >")
	response.write("<br><br><br>")
	response.write("<input type='submit' value='PIN'>");
	response.write("</form>")
	response.write("<body>");
	response.write("</body>");
	response.write("</html>");
	console.log(request.url)
	var requrl= request.url
	//console.log(url.parse(request.url).pathname)
	if (url.parse(request.url).pathname == "/PING"){
		console.log(request.url)
		console.log(url.parse(requrl).query)
		var IP = getIP(url.parse(requrl).query)
		console.log(IP)
		var result = ping(IP)
		response.write("IP received, Ping result is");
		response.write(result)
	}

	response.end();
}).listen(8888);

function getIP(string){
	var string = string
	return string.substr(3)
}

function ping(IP){
	var ip = IP
	console.log('runs here')
	
}