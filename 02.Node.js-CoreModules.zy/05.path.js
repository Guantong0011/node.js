/**
 * Created by dllo on 17/8/1.
 */
var path = require('path');
//路径拼接
var fullPath = path.join(__dirname,'B','A.jpg');

//2.resolve 从右往左,生成绝对路径
//当最终路径为绝对路径是,拼接终止
var full = path.resolve("/foo",'/bar','baz');
console.log(full);

var fullPath = path.resolve("./a",'./b','./c');
console.log(fullPath);