<?php
	header("Access-Control-Allow-Origin:*");
	header("content-type:text/html;charset=utf8");
	mysql_connect("localhost","root","");
	mysql_select_db('dr');
	mysql_query("set names 'utf8'");
	$sql = "select * from ring where ringnum>0";
	$rel = mysql_query($sql);

	$topArr=array();
	while ($arr = mysql_fetch_array($rel)) {
		array_push($topArr, $arr);
	}

	$json = array("data" => $topArr);
	echo json_encode($json);
	

mysql_close();
?>