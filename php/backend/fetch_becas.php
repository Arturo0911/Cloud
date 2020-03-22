<?php
    include('../connection/connection.php');
    $query = "SELECT * FROM Becas_colegio";
    $consulta = mysqli_query($conn,$query);
    $json = array();
    while($filas = mysqli_fetch_array($consulta)){
        $json[] =array(
            'tipo_beca' => $filas['tipo_beca'],
            'cedula_becado' => $filas['cedula_becado'],
            'nombres_becado' => $filas['nombres_becado'],
            'comentarios_becado' => $filas['comentarios_becado']
        );
    }
    $jsonString = json_encode($json);
    echo $jsonString;

?>