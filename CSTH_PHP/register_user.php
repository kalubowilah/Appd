<?php 
//headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once './DBConfig.php';
 
 
if ($conn->connect_error) {
 
 die("Connection failed: " . $conn->connect_error);
} 

$json = file_get_contents('php://input');
$obj = json_decode($json,true);
 $name = $obj['name'];
$email = $obj['email'];
$nic = $obj['nic'];
$password = $obj['password'];
$reg_number = $obj['reg_number'];
$phone = $obj['phone'];
$position = $obj['position'];

//data cleaning
// $position = htmlspecialchars(strip_tags($data->position));
// $name = htmlspecialchars(strip_tags($data->name));
// $reg_number = htmlspecialchars(strip_tags($data->reg_number));
// $nic = htmlspecialchars(strip_tags($data->nic));
// $phone = htmlspecialchars(strip_tags($data->phone));
// $email = htmlspecialchars(strip_tags($data->email));
// $password = htmlspecialchars(strip_tags($data->password));
 
$query = 
    "
    INSERT INTO user_reg (position, name, reg_number, nic, phone, email, password)
    VALUES ('$position', '$name', '$reg_number', '$nic', '$phone', '$email', '$password');
    ";
    // "
    // INSERT INTO user_reg (name,  email, password)
    // VALUES ('$name', '$email', '$password');
    // ";
$result = $conn->query($query);
 
if(!$result){
    echo json_encode(

        mysqli_error($conn)
    );
    return;
}

echo json_encode(
    array('message' => 'User Created')
);