/**
 * Created by dllo on 17/8/7.
 */
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



router.post('/',function (req,res) {


    var oldpassword=req.body.oldpassword;
    var password1=req.body.password1;
    var password2=req.body.password2;
    console.log(oldpassword);


    var pool=mysql.createPool(options);
    var selectU=`select * from user where password='${oldpassword}'`;

    pool.query(selectU,function (err,result) {
        if(!handleError('查询',err)) return;
        // console.log(result);
        // console.log(result.length);
        if(result.length!==0){
            if(oldpassword===result[0]['password']){
                var selectS =`select * from user where password='${password1}'`;
                        pool.query(selectS,function (err,result) {
                            if (password1 == password2)
                            {
                                var updateU = `update  user set password ='${password1}'`;
                                pool.query(updateU,function (err,result) {
                                    console.log('新密码')
                                    res.send('修改密码成功')
                                });
                            }
                            else
                            {
                                res.send('两次密码不一致')
                            }
                        })





            }


        }
        else {
            res.send('失败');
        }

    })



    });


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

module.exports = router;










