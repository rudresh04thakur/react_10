<?php 
     $data = json_decode(file_get_contents('php://input'));
    // $con = mysqli_connect('localhost','root','','react_7m'); //php7
    $con = mysql_connect('localhost','root','') or die("A") ;//php 5
    $db = mysql_select_db('react_7m') or die("B"); //php 5
    $str = "INSERT INTO users (name,mobile,email,password) VALUES ('".$data->name."','".$data->mobile."','".$data->email."','".$data->password."')";
    if($data->email!=''){
        $result = mysql_query($str) or die(mysql_error());
        echo "success";
    }else{
        echo 'error';
    }
    


?>