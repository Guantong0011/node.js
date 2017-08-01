/**
 * Created by dllo on 17/8/1.
 */

//不需要引入,直接使用

//1. __dirname  完整当前文件夹路径
console.log( __dirname);
//2. __filename
console.log( __filename);
//3. exports module.exports 导出
//4. require 引入模块
//5. console 控制台
//6. global 全局变量
//  注意: 尽量不要在global中存放内容
console.log(global);
//7.module
module.exports.name = '哈哈';
console.log(module);

//require和exports以及module.exports
//1. 核心模块子啊引用时,不需要添加路径. 直接使用模块名
//2. 自行编写的模块,需要添加路径

//require 引入模块, 引入的为模块中exports部分的内容
//exports 导出,导出的是对象
var A = require('./A');
console.log(A);

//exports 与 module.exports 区别
//1.默认情况下, exports = module.exports
//2.require 对应的是 module.exports
//3.当给exports 或module.exports赋对象时
// 1> 如果给exports赋值,没有给module.exports赋值,
// 结果: 导出模块,再被引入时为空
//2>如果给module.exports赋值,不给exports赋值
//  结果: 后续再调用exports.属性时.无效
