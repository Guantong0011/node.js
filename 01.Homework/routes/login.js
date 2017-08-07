/**
 * Created by dllo on 17/8/7.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.render('login');
});
//导出
module.exports = router;
