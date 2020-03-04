<?php
//   // 处理中文乱码
  header('content-type: text/html;charset=utf-8;');

  $user = $_GET['username'];
  $pword = $_GET['password'];




  // 连接数据库
  $link = mysqli_connect('localhost', 'root', 'root', 'userinfo');

  // 执行 sql 语句了
  //   执行一条插入的语句
  $sql = "INSERT INTO `user` VALUES(null, $user,$pword)";
  $res = mysqli_query($link, $sql);


  // 输出结果看一下
  //   true 表示插入成功
//   var_dump($res);

if ($res == true) {
    $arr = array("message" => "注册成功", "code" => 1);
  } else {
    $arr = array("message" => "注册失败", "code" => 0);
  }
  
 echo json_encode($arr);

?>