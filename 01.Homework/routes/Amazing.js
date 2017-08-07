/**
 * Created by dllo on 17/8/7.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');





/* GET users listing. */
router.get('/', function(req, res) {
    res.render('Amazing');
});
//导出
module.exports = router;




function handleError(message, error) {
    if (error) {
        console.log(message + '失败');
        console.log(error)
        return false
    } else {
        console.log(message + '成功');
        return true
    }
}