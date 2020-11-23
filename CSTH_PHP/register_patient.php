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
$age = $obj['age'];
$address = $obj['address'];
$allergies = $obj['allergies'];
$sex = $obj['sex'];
$bht = $obj['bht'];
$doctor = $obj['doctor'];
$ward = $obj['ward'];
$time = $obj['time'];
$type = $obj['type'];
$date = $obj['date'];
$theater = $obj['theatre'];
$note = $obj['note'];



 
$query = 
    "
    INSERT INTO patient_details ( name, age, address, sex, allergies, bht, doctor, ward, time, type, date, theater, note)
    VALUES ( '$name', '$age', '$address', '$sex', '$allergies', '$bht', '$doctor', '$ward', '$time', '$type', '$date', '$theater', '$note');
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
    array('message' => 'Patient Details Added')
);