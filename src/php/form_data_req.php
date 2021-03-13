<?php
require("connect.php");

$name = $_POST['name'];
$email = $_POST['email'];
$descr = $_POST['problem'];

$qr = "INSERT INTO data(ID, Name, Email, Description) VALUES ('','$name','$email','$descr')";
$result = $conn->query($qr);

mysqli_close($conn);
header("Location: /index.html"); 
exit();
?>