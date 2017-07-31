/**
 * Created by dllo on 17/7/31.
 */
require('console');

//log info 输出信息
//1.log
console.log('打印输出');
//2.info
console.info('打印输出');

//warn error 警告 错误
//3.warn
console.warn('警告');
//4.error
console.error('错误');
//5.dir 用于打印对象
var obj = new Object();
obj.name = '哈哈';
obj.type = 1;
console.dir(obj);
//6.time tmeEnd
console.time('flag');
for (var i = 0; i < 100000; i++){

}
console.timeEnd('flag');
//7.trace 栈信息
console.trace();
//8.assert 断言
//断言: 中断代码执行,给出错误提示
console.assert(1 === 2 ,'1不等于2');
console.log('11111');