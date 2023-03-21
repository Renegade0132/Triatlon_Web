<?php
 $host = "localhost";
 $username = "root";
 $password = "";
 $db = "Triatlon";

 $conn = new mysqli($host, $username, $password, $db);

 if(!$conn){
     die("Hiba: " . $conn->connect_error);
 }
?>