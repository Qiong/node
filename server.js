

var http = require ("http")
var url = require("url");
http.createServer(function(request, response) {
	//response.writeHead(200, {"Content-Type": "text/plain"});
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<!DOCTYPE html>");
	response.write("<html>");
	response.write("<head>");
	response.write("<form method=get>")
	response.write("IP Address: <input type='text' name='IP' value=''>")
	response.write("<br><br><br>")
	response.write("<input type='submit' value='PING TESTING'>");
	response.write("</form>")
	response.write("</head>");
	response.write("<body>");
	response.write("</body>");
	response.write("</html>");
	var params = url.parse(request.url,true).query;
	var a = params.number1;
	var numA = new Number(a);
	response.write(numA);
	response.end();
}).listen(8888);