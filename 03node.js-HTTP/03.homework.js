/**
 * Created by dllo on 17/8/2.
 */
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');




var sever = http.createServer(function (request,response) {
    var urlObj = url.parse(request.url);
    var pathname = urlObj.pathname;
    if (pathname === '/img.jpg')
    {
        var finalPath =path.join(__dirname,pathname);

        fs.readFile(finalPath,'binary',function (err,data) {

            response.end(data,'binary');
        });

    }
    else
    {
        response.statusCode = 404;
        response.end('文件未找到');
    }





});
sever.listen(3000,function () {
    console.log("aaa")
});