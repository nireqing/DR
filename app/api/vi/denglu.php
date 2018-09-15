<?php
$userid = $_POST['sf'];
$userpwd = $_POST['sfpw'];
header("Access-Control-Allow-Origin:*");
header("content-type:text/html;charset=utf8");
mysql_connect("localhost","root","");
mysql_select_db('dr');
mysql_query("set names 'utf8'");
$sql = "SELECT * from user where userid='$userid' and userpwd='$userpwd'";
$res = mysql_query($sql);
// $rel = mysql_num_rows($res);
if(mysql_num_rows($res)){
	echo '1';
}else{
	echo '0';
}


mysql_close();
?>