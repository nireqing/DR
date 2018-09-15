<?php
$userid = $_POST['sf'];
header("Access-Control-Allow-Origin:*");
header("content-type:text/html;charset=utf8");
mysql_connect("localhost","root","");
mysql_select_db('dr');
mysql_query("set names 'utf8'");
$sql = "SELECT * from `user` where userid='$userid'";
$res = mysql_query($sql);

if(mysql_num_rows($res)){
	echo "0";
}else{
	echo "1";
}
mysql_close();
?>