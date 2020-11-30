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
$status = $obj['status'];

// echo $id;
// echo $status;
 $query = 
 "
 UPDATE patient_details 
 SET status='$status'
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