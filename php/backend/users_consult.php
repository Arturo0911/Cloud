<?php 

    include('../connection/connection.php');
    $query_counts_trabajadores = "SELECT count(*) filas_trabajadores FROM trabajadores_colegio";
    $query_count_alumnos = "SELECT count(*) filas_alumnos FROM Alumnos_Data";
    $query_count_rows = "SELECT count(*) filas FROM usuarios"; // para la tabla de usuarios

    $consulta = mysqli_query($conn,$query_count_rows);
    $consulta_alumnos = mysqli_query($conn,$query_count_alumnos);
    $consulta_trabajadores = mysqli_query($conn,$query_counts_trabajadores);


    $json = array();
    // Este bucle es para instanciar a las consultas de cantidad de usuarios
    while($rows = mysqli_fetch_array($consulta)){
        $json[] = array(
            'filas' => $rows['filas']
        );
    }


    // Este bucle es para instanciar a las consultas de cantidad de alumnnos
    while($rows_alumnos = mysqli_fetch_array($consulta_alumnos)){
        $json[] = array(
            'filas_alumnos' => $rows_alumnos['filas_alumnos']
        );
    }


    // Este bucle es para instanciar a las consultas de cantidad de trabajadores
    while($rows_trabajadores = mysqli_fetch_array($consulta_trabajadores)){
        $json[] = array(
            'filas_trabajadores' => $rows_trabajadores['filas_trabajadores']
        );
    }


    $jsonString = json_encode($json);
    echo $jsonString;


?>