<?php 
    include('../connection/connection.php');
    $Fecha = $_POST['Fecha'];
    $Dia = $_POST['Dia'];
    $Cedula = $_POST['Cedula'];
    $Nombres = $_POST['Nombres'];
    $Titulo = $_POST['Titulo'];
    $Descripcion = $_POST['Descripcion'];

    $query_insert = "INSERT INTO novedades_diarias VALUES('$Fecha','$Dia','$Cedula','$Nombres','$Titulo','$Descripcion')";
    $result = mysqli_query($conn,$query_insert);
    if (isset($result)){
        echo "Datos guardados correctamente";
    }


?>