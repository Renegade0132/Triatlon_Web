<?php

include "conn.php";

$inputUserName= $_POST['inputUserName'];
$inputPassword= $_POST['inputPassword'];
$inputEmail= $_POST['inputEmail'];

$sql = "INSERT INTO users (username,email,password) VALUES('$inputUserName', '$inputEmail', '$inputPassword')";

$result = $conn->query($sql);

if ($result) {
    echo "Sikeres regisztráció!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

?>