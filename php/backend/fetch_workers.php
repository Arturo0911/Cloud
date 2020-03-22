<?php
    include('../connection/connection.php');

    

    $query_workers = "SELECT cedula,nombres, apellidos, departamento,jornada FROM trabajadores_colegio";
    $consulta_workers = mysqli_query($conn,$query_workers);

    $json_workers = array();
    while($rows =  mysqli_fetch_array($consulta_workers)){
        $json_workers[] = array(
            'cedula' => $rows['cedula'],
            'nombres' => $rows['nombres'],
            'apellidos' => $rows['apellidos'],
            'deparmaneto' => $rows['departamento'],
            'jornada' => $rows['jornada']
        );
    }

    $jsontring = json_encode($json_workers);
    echo $jsontring;

?>