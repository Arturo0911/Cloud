<?php

    include('../../connection/connection.php');
    $query_cedula = "SELECT cedula FROM Docentes";
    $success = mysqli_query($conn,$query_cedula);

    $json = array();
    while($rows = mysqli_fetch_array($success)){
        $json[] = array(
            'cedula' => $rows['cedula']
        );
    }
    $jsoncedula = json_encode($json);
    echo $jsoncedula;

?>