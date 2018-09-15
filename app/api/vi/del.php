<?php
	header("Access-Control-Allow-Origin:*");
	$id = $_POST['id'];
	header("content-type:text/html;charset=utf8");
	mysql_connect("localhost","root","");
	mysql_select_db('dr');
	mysql_query("set names 'utf8'");
	$sql = "select ringnum from ring where id=$id";
	$rel1 = mysql_query($sql);

	while ($arr = mysql_fetch_array($rel1)) {
		$ringnum = $arr["ringnum"];
	}
	  $ringnum--;
	$sql2 = "UPDATE ring set ringnum='$ringnum' where id='$id'";
	$isSucc = mysql_query($sql2);

	if($isSucc){
		echo '1';
	}else{
		echo '0';
	}
	
	

mysql_close();
?>