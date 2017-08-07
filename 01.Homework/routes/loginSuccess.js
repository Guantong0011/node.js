/**
 * Created by dllo on 17/8/7.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '000000',
    database: 'NewB'
}

var connection = mysql.createConnection(options);
connection.connect(function (error) {

    handleError('链接', error);
});


router.post('/', function (req, res) {
    // console.dir(req.body);
    // console.log(req.body.username);
    // console.log(req.body.password);
    var selectDBSQL = "select * form username where username = " + "'"
        + req.body.username + "'" + "and password = " + "'" + req.body.password + "'";

    var selectUser = `select * from user where username='${req.body.user}' 
    and password= '${req.body.password}'`;



    // console.log(selectDBSQL);
    // console.log(selectUser);
    connection.query(selectUser,function (error,results) {
       if (!handleError('查询',error)) return;
        if (results.length !==0 )
        {
            res.send('成功')
        }
        else
        {
            res.send('失败')
        }

    })


});


// var option = {
//     connectionLimit : 3,
//     host :'localhost',
//     pore : 3306,
//     user : 'root',
//     password : '000000',
//     database : 'NewB',//链接时,直接使用数据库
// }




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