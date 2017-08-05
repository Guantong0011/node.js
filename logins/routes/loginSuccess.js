/**
 * Created by dllo on 17/8/5.
 */
/**
 * Created by dllo on 17/8/5.
 */
var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    // response 渲染页面, views/page
    res.render('loginSuccess' ,{title : 'Success'});
});
//导出
module.exports = router;