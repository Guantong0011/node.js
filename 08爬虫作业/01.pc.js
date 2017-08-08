/**
 * Created by dllo on 17/8/8.
 */
// var download = require('/01.dowenload')
var request = require('request')
var cheerio = require('cheerio')
var download = require('./download');



var options = {
    url: 'https://www.douban.com/',
    headers: {
        'Host': 'www.douban.com',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
    }
}
request.get(options, function (error, response, body) {
    var $ = cheerio.load(body)
    //上方四张小图片
    var items = []
    $("#anony-sns .wrapper .main .mod .albums > ul > li .pic > a > img").each(function (index,element) {
        items.push($(element).attr('data-origin'))
        //console.log($(element).attr('data-origin'));
    })
    items.forEach(function (item,index) {
        download(item,'HotText',index + '.jpg')
    })
    var a = [];
    $("#anony-sns .wrapper .main .mod .notes > ul > li   ").each(function (index,element) {

        a.push($(element).text());
        //console.log(a);
    })




    var imgTime = []


    $("#anony-time .wrapper .main > ul > li > a >img ").each(function (index,element) {

        //console.log($(element).attr('src'));
       var  itemS = {
            src : $(element).attr('src'),
            title :index
        }

        imgTime.push(itemS)

    })
    $("#anony-time .wrapper .main > ul > li > .title    ").each(function (index,element) {
        imgTime[index].title=$(element).text();
    })
    console.log(imgTime)









})
