/**
 * Created by dllo on 17/8/5.
 */
var express = require('express');
var router = express.Router();

router.get('/',function (req,res) {
    // response 渲染页面, views/page
    res.render('login');
});
//导出
module.exports = router;