<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once './DBConfig.php';

    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $id = $obj['id'];

    $query = 
    "
    SELECT * FROM patient_details WHERE id='$id'; 
    ";

    $result = mysqli_query($conn, $query);

    if(!mysqli_num_rows($result) > 0) {
        echo json_encode(
            // array('message' => 'No Posts Available')
            mysqli_error($conn)
        );
        return;
    }

    while($row = mysqli_fetch_assoc($result)){
        $row = extract($row);
        
        $user = array(
            'id'=>$id,
            'created_at' => $created_at,
            'doctor' => $doctor,
            'name' => $name,
            'age' => $age,
            'address' => $address,
            'sex' => $sex,
            'allergies' => $allergies,
            'bht' => $bht,
            'ward' => $ward,
            'type' => $type,
            'time' => $time,
            'theater' => $theater,
            'note' => $note,
            'date' => $date,
            'created_by' => $created_by,
            'updated_at' => $updated_at,
           );
    }
    echo json_encode($user);
    return;