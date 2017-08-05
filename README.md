#sql 语句
###创建数据库
	create database dbname;
	create table student(
	id int not null auto_increment primary key,
	name varchar(25),
	age int
	);


###创建表

	CREATE TABLE 表名称
	(
	  列名称1,数据类型,
	  列名称2,数据类型,
	  列名称3,数据类型,
	  ......
	  
	)
	
| 数据类型      | 描述         | 
| ------------- |:-------------:| 
| integer()size | 仅仅容纳整数 | 
|     int()        |    仅仅容纳整数 |
|    smalint(size)  |     仅仅容纳整数  |
| char      | 容纳固定长度的字符串    |   
| varchar | 容纳可变长度的字符串      |    

	CREATE TABLE man
	(
	Id int,
	LastName varchar(255),
	FirstName varchar(255),
	sex varchar(255),
	age int(100)
	)
###查询表

| sql      | 描述         | 
| ------------- |:-------------:| 
|SELECT * FROM ALL_TABLES  | 系统里有权限的表 | 
|SELECT * FROM DBA_TABLES  | 系统表         |
|SELECT * FROM USER_TABLES | 当前用户下的表   |

###向表中插入语句
	INSERT INTO 表名称(列1,列2,列3) VALUES('值1','值2','值3')
###表中删除语句
	DELETE FROM 表名 WHERE 条件
###表中修改数据
	UPDATE 表名 SET 字段1 = 值1 , 字段2 = 值2 ,.....WHERE 条件
###删除表
		1. 先登录数据库，在左侧控制面板点击“自助管理”-“数据库”，选择数据库点“管理”，点击“高级管理”
		2. 出现MYSQL高级管理登录框，用您的数据库用户名，密码登录，在登陆时，需要根据您的数据库编码选择对应的语言，一般可以选择“Chinese Simplified (zh-utf-8)”和“Chinese Simplified (zh-gb2312)”，根据你的MYSQL数据库编码来确定。
		3. 登陆MYSQL管理器后，左侧点击你的数据库名字，右侧会出现该数据库下所有数据表。
		4. 在每行数据表右侧有一个红色的“叉”按钮，即可删除当前的表。
		5. 要删除多个表，勾选每个表，点最底部的删除按钮。
　　


　　　　
　　		