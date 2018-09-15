<?php
$userid = $_POST['sf'];
$userpwd = $_POST['sfpw'];
header("Access-Control-Allow-Origin:*");
header("content-type:text/html;charset=utf8");
mysql_connect("localhost","root","");
mysql_select_db('dr');
mysql_query("set names 'utf8'");
$sql = "INSERT INTO `user` (`userid`, `userpwd`) VALUES ('$userid', '$userpwd')";
$isSucc = mysql_query($sql);
if($isSucc){
	echo '{"code":1}';
}else{
	echo '{"code":0}';
}
mysql_close();
?>