<?php
$user = $_GET['username'];
$pword = $_GET['password'];

//连接数据库
$link = mysqli_connect('localhost', 'root', 'root', 'userinfo');

//执行mysql语句
$sql = "SELECT * FROM `user` WHERE `username`='$user' AND `password`='$pword'";
$res = mysqli_query($link, $sql);

//解析结果
$row = mysqli_fetch_assoc($res);

mysqli_close($link);

  if ($row) {
    $arr = array("message" => "登录成功", "code" => 1);
  } else {
    $arr = array("message" => "登录失败", "code" => 0);
  }
  
 echo json_encode($arr);
?>