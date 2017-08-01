/**
 * Created by dllo on 17/8/1.
 */
var url = require('url');


//定义 url
var baiduUrl = 'http://www.baidu.com/1/img/1.jpg?width=200&height=200#host';

//1.解析URl
var urlJson = url.parse(baiduUrl);
console.dir(urlJson);

var urlObj = {
    protocol : 'http:',
    host : 'www.baidu.com',
    port : 8080,
    pathname : '/2/text/1.txt',
    search : '?name=zhangsan&age=20'
};
var urlStr = url.format(urlObj);
console.log(urlStr);