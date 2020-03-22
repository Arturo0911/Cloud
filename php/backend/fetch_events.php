<?php
    include('../connection/connection.php');

    $query_consulta = "SELECT Fecha_informe, titulo_informe FROM novedades_diarias order by dia_informe";
    $resultado = mysqli_query($conn,$query_consulta);

    $json =  array();
    while($rows = mysqli_fetch_array($resultado)){
        $json[] = array(
            'Fecha' => $rows['Fecha_informe'],
            'titulo' => $rows['titulo_informe']
        );
    }
    $jsonString = json_encode($json);
    echo $jsonString;
?>  