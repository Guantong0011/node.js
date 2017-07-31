/**
 * Created by dllo on 17/7/31.
 */
var fs = require('fs');

//fs.open(path, flags[, mode], callback)
fs.open('./file/111', 'w', 777, function (err, fd) {
    if (err) {
        return
    }
    console.log(fd)

});
//文件 访问时间 修改时间
fs.utimes('./file', new Date(), new Date(), function (err) {

    if (err) {
        return
    }
});
// 文件路径
// [options], persistent true表示持续监视，不退出程序；interval 单位毫秒，表示每隔多少毫秒监视一次文件
// listener, 文件发生变化时回调，有两个参数：curr为一个fs.Stat对象，被修改后文件，prev,一个fs.Stat对象，表示修改前对象
fs.writeFile('./file', {interval: 20}, function (curr, prev) {
    if (Date.parse(prev.ctime) == 0) {
        console.log('文件被创建!');
    } else if (Date.parse(curr.ctime) == 0) {
        console.log('文件被删除!')
    } else if (Date.parse(curr.mtime) != Date.parse(prev.mtime)) {
        console.log('文件有修改');
    }
});
//取消监听
fs.unwatchFile('./file',{interval:100},function (curr, prev) {
    console.log('监视文件发生修改');
});

fs.link('./file','./file2',function () {

});