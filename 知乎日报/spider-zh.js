/**
 * Created by dllo on 17/8/9.
 */
var webpage = require('webpage');
var download = require('./download')
var fs =require('fs');
var page = webpage.create();
phantom.outputEncoding = 'utf-8';

page.onConsoleMessage = function(msg, lineNum, sourceId) {
    console.log('CONSOLE: ' + msg);
};




page.open('http://daily.zhihu.com/', function (status) {
    if (status === 'success') {
        console.log('加载成功');
        console.log(page.title);
        page.includeJs("https://code.jquery.com/jquery-3.2.1.min.js", function () {
            setTimeout(function () {
                var arrString = page.evaluate(function () {
                    var arr=[];
                    $('.main-content .container-fixed-width .main-content-wrap .row .col-lg-4 .wrap .box >a > img').each(function (index, element) {
                        var a= $(element).attr('src')
                        arr.push(a);
                        console.log(a)
                    });

                    return arr
                });


                fs.write('./arr.json',arrString,'w');

                phantom.exit(0)
            }, 5000);
        })
    }
    else{
        console.log('加载失败');
        phantom.exit(0)
    }
});/**
 * Created by dllo on 17/8/11.
 */
