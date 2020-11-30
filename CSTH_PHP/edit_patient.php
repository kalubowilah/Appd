<?php
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

$id = $obj['id'];
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
$status = $obj['status'];


// echo $id;
// echo $status;
 $query = 
 "
 UPDATE patient_details 
 SET 
    name='$name', age='$age',  address='$address', allergies='$allergies', sex='$sex', bht='$bht', doctor='$doctor', ward='$ward', time='$time', type='$type', date='$date', theater='$theater', note='$note', status='$status'
 WHERE id='$id'
 "; 


 $result = mysqli_query($conn, $query);

    if(!$result){
        echo json_encode(
            // array('message' => 'Post Not Updated')
             mysqli_error($conn)
        );
        return;
    }

    echo json_encode(
        array('message' => 'Status Updated')
    );