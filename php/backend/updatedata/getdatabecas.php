<?php

    include('../../connection/connection.php');
    $id = $_POST['id_beca'];
    $query_consulta = "SELECT * FROM Becas_colegio WHERE cedula_becado='$id' ";
    $success_consult = mysqli_query($conn,$query_consulta);

    $json = array();
    while ($rowsFetched = mysqli_fetch_array($success_consult)){
        $json[]=array(
            'tipo_beca'=>$rowsFetched['tipo_beca'],
            'cedula_becado'=>$rowsFetched['cedula_becado'],
            'nombres_becado'=>$rowsFetched['nombres_becado'],
            'comentarios_becado'=>$rowsFetched['comentarios_becado'],
        );
    }

    $jsonString = json_encode($json[0]);
    echo $jsonString ;


?>