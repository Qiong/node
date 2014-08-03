

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
	if (req.method == "POST"){
		console.log(req.body.IP)
	}


	response.end();
}).listen(8888);