const http = require('http');
const fs = require('fs');
const url = require('url');
const app = http.createServer(function(request, response){
    let _url = request.url;
    let queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    if(_url == '/'){
        _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        return writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname+url));
});
app.listen(3000);