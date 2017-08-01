/**
 * Created by dllo on 17/8/1.
 */
var querystring = require('querystring');

//查询字符串
//http://www.baidu.com/1/img?width=100&height=200

var string = 'width=100&height=200';
//1.parse 将字符串解析成 JSON 对象
//2.参数1 : 要解析的字符串
//  参数2 : 键值对链接方式    例 &  key=value&key=value
//  参数3 : 键值间的链接方式  例 =   key=value
//  参数4 : 选项 解析函数 最大解析条数
var obj = querystring.parse(string);
console.dir(obj);
//2.stringify 将 JSON 对象转换成字符串
//2.参数1 : 要字符串化的对象
//  参数2 : 键值对链接方式    例 &  key=value&key=value
//  参数3 : 键值间的链接方式  例 =   key=value
//  参数4 : 选项 解析函数 最大解析条数
var json = {
    name : '如花',
    age : 18
};
var query = querystring.stringify(json);
console.log(query);