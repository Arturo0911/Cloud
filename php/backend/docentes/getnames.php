<?php

    include('../../connection/connection.php');
    $cedula = $_POST['cedulaverifi'];

    $query_consulta = "SELECT nombres, apellidos FROM Docentes where cedula='$cedula'";
    $success = mysqli_query($conn,$query_consulta);

    $jsonconsult = array();

    while($rows = mysqli_fetch_array($success)){
        $jsonconsult[] =array(
            'nombres'=> $rows['nombres'],
            'apellidos'=> $rows['apellidos']
        );
    }
    $jsonString = json_encode($jsonconsult[0]);
    echo $jsonString;

?>