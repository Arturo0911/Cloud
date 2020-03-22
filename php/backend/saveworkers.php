<?php
    include('../connection/connection.php');


    //echo "Se está recibiendo los datos de manera correcta";
    $cedula = $_POST['cedula'];
    $nombres = $_POST['nombres'];
    $apellidos = $_POST['apellidos'];
    $Foto_work = addslashes(file_get_contents($_FILES['Foto_work']['tmp_name']));
    $direccion = $_POST['direccion'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $departamento = $_POST['departamento'];
    $cargo = $_POST['cargo'];
    $jornada = $_POST['jornada'];
    $usuario = $_POST['usuario'];
    $clave = $_POST['clave'];

    $query_insert_workers = "INSERT INTO trabajadores_colegio VALUES('$cedula','$nombres', '$apellidos', '$Foto_work',
     '$direccion','$telefono', '$email','$departamento','$cargo','$jornada','$usuario','$clave')";
    $resultado_insert_workers = mysqli_query($conn,$query_insert_workers);
    if ($resultado_insert_workers){
        echo "Datos guardados correctamente";
    }
    else{
        echo "problemas al cargar la información";
    }


?>