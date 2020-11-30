<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once './DBConfig.php';

    // if($conn){
    //     echo 'sfsf'
    // }
    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $user_id = $obj['user_id'];

    $query1 = 
    "
    SELECT * FROM user_reg WHERE id='$user_id'; 
    ";
    $result1 = mysqli_query($conn, $query1);
    while($row = mysqli_fetch_assoc($result1)){
        $row = extract($row);
        $created_by_name = $name;
    }

    $query = 
    "
    SELECT * FROM patient_details WHERE status='DENIED' AND created_by='$created_by_name' ; 
    ";

    $result = mysqli_query($conn, $query);

    if(!mysqli_num_rows($result) > 0) {
        echo json_encode(
            // array('message' => 'No Posts Available')
            mysqli_error($conn)
        );
        return;
    }

    $users_arr = array();
    while($row = mysqli_fetch_assoc($result)) {
        $row = extract($row);

        $user = array(
            'id' => $id, 
            // 'position' => $position,
            // 'body' => html_entity_decode($body) ,
            // 'author' => $author,
            // 'category_id' => $category_id,
            // 'category_name' => $category_name,
        );
        // echo $title . '<br>';
        array_push($users_arr, $user);
    }
    echo json_encode($users_arr);