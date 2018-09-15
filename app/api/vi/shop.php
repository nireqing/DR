<?php
header("Access-Control-Allow-Origin:*");
$index = $_POST['index'];
$n = $_POST['n'];
header("content-type:text/html;charset=utf8");
mysql_connect("localhost","root","");
mysql_select_db('dr');
mysql_query("set names 'utf8'");
//查询每页对应的数据
$sql1 = "SELECT * from ring limit ".(($index-1)*$n).",".$n;
$res1 = mysql_query($sql1);
//查询所有数据
$sql2 = "SELECT COUNT(*)  as AllNum FROM ring";
$res2 = mysql_query($sql2);
$res2 = mysql_fetch_assoc($res2);

$topArr=array();
while ($arr = mysql_fetch_array($res1)) {
		array_push($topArr, $arr);
	}

//json存所有数据
$json = array("allNum" => $res2['AllNum'],"data" => $topArr);
echo json_encode($json);

mysql_close();
?>