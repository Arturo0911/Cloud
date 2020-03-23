<?php
    include('../../connection/connection.php');
    $query = "SELECT *FROM Asignaturas_colegio";

    $success = mysqli_query($conn,$query);
    $json = array();
    while($rows = mysqli_fetch_array($success)){
        $json[] = array(
            'nombre_materia'=>$rows['nombre_materia'],
            'grupo_especialidad'=>$rows['grupo_especialidad'],
            'director_cedula'=>$rows['director_cedula'],
            'director_nombre'=>$rows['director_nombre']
        );
    }
    $jsonString = json_encode($json);
    echo $jsonString;


?>