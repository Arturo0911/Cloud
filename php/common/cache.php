<?php

    include('../connection/connection.php');
    $cedula = $_POST['cedula'];
    /*$json[] = array(
        'cedula' => $cedula
    );*/
    $query_main = "SELECT nombres, apellidos, cargo FROM Usuarios WHERE cedula='$cedula'";
    $result_main = mysqli_query($conn, $query_main);

    $json =  array();
    while ($rows = mysqli_fetch_array($result_main)){
        $json[] = array(
            'nombres' => $rows['nombres'],
            'apellidos' => $rows['apellidos'],
            'cargo' => $rows['cargo']
        );
    }
    $json_string = json_encode($json);
    echo $json_string;

?>