<?php
session_start();
include("sql.inc.php");

$id = $_POST['account'];
$email = $_POST['email'];
$address = $_POST['email'];
$sql = "SELECT * FROM svList_account WHERE account = '$id'";
$result = mysql_query($sql);
$row = mysql_fetch_row($result);
$v = $row[5];

$_SESSION['msg'] = "cmailok";
require 'phpmailer/PHPMailerAutoload.php';
$mail = new PHPMailer;

$mail->SMTPDebug = 0; 
$mail->isSMTP();
##郵件伺服器位置
$mail->Host = 'smtp.gmail.com';
##郵件伺服器啟用加密
$mail->SMTPAuth = true;
##Email
$mail->Username = '';
##Email密碼
$mail->Password = '';
##郵件伺服器加密方式
$mail->SMTPSecure = 'ssl';
##郵件伺服器端口
$mail->Port = 465;

##郵件 Email/顯示名稱
$mail->setFrom('','');
$mail->addAddress($address);
$mail->addAddress($address);
$mail->addReplyTo('');

##與Email相同
$mail->addCC('');
$mail->addBCC('');

$mail->isHTML(true);

##郵件標題
$mail->Subject = '忘記密碼';

##郵件內文
$mail->Body    = '
<!DOCTYPE>
<html lang="zh_TW">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>伺服器列表驗證系統</title>
</head>
<body>
<div style="width: 100%; font-family: 微軟正黑體, Helvetica, sans-serif; font-size: 12px;">
點擊驗證 <a href="https://server.wartw.top/v?v='.$v.'&id='.$id.'">https://server.wartw.top/v?v='.$v.'&id='.$id.'</a><br>本電子郵件無法個別對玩家進行回復，有問題請至<a href="https://forum.gamer.com.tw/C.php?bsn=18673&snA=159343&subbsn=0" target="_blank">巴哈文章</a>提出問題詢問。
</div>
</body>
</html>';
$mail->AltBody = '';

if($mail->send()){
$_SESSION['msg'] = 'mail_ok';
header("Location: ../dashboard"); 
exit;
}else{
$_SESSION['msg'] = 'mail_error';
header("Location: ../dashboard"); 
exit;
}
header("Location: ../dashboard"); 
exit;
include('_core/footer.php');
