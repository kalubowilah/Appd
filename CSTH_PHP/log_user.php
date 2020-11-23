<?php
 header('Access-Control-Allow-Origin: *');
 header('Content-Type: application/json');

 include_once './DBConfig.php';

 if ($conn->connect_error) {
 
    die("Connection failed: " . $conn->connect_error);
   }

$json = file_get_contents('php://input');
$obj = json_decode($json,true);

$email = $obj['email'];
$password = $obj['password'];
$position = $obj['position'];


 $query = 
 "SELECT * FROM user_reg 
 WHERE position='$position'
 AND email='$email'
 AND password='$password'
 "; 

 $result = mysqli_query($conn,$query);

 if(!mysqli_num_rows($result) > 0){
    echo json_encode(mysqli_error($conn));

    return;
}


 while($row = mysqli_fetch_assoc($result)){
     $row = extract($row);
     
     $user = array(
         'position'=>$position,
         'user_id' => $id
        );
 }

 echo json_encode($user);
 return;