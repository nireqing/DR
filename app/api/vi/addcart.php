<?php
	header("Access-Control-Allow-Origin:*");
	$id = $_POST['id'];
	header("content-type:text/html;charset=utf8");
	mysql_connect("localhost","root","");
	mysql_select_db('dr');
	mysql_query("set names 'utf8'");

	$sql1 = "select ringnum from ring where id='$id'";
	$rel1 = mysql_query($sql1);
	// $topArr=array();
	while ($arr = mysql_fetch_array($rel1)) {
		$ringnum = $arr["ringnum"];
	}
	  $ringnum++;
	 //点击一次加入购物车，指定商品的ringnum+1；

	//往数据库插入一条数据使ringnum的值+1，成功返回1
	$sql = "UPDATE ring set ringnum='$ringnum' where id='$id'";
	$rel = mysql_query($sql);

	if($rel){
		echo "1";
	}else{
		echo "0";
	}

mysql_close();
?>