<?php
    include('../../connection/connection.php');
    $cedula = $_POST['cedula'];
    $nombres = $_POST['nombres'];
    $apellidos = $_POST['apellidos'];
    $foto = addslashes(file_get_contents($_FILES['foto']['tmp_name']));
    $fecha_nacimiento = $_POST['fecha_nacimiento'];
    $estado_civil = $_POST['estado_civil'];
    $especialidad = $_POST['especialidad'];
    $direccion = $_POST['direccion'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $gSanguineo = $_POST['gSanguineo'];
    $peso = $_POST['peso'];
    $altura = $_POST['altura'];
    $medicinas = $_POST['medicinas'];
    $alergias = $_POST['alergias'];
    $patologias = $_POST['patologias'];

    $query_insert = "INSERT INTO Docentes VALUES ('$cedula','$nombres','$apellidos','$foto',
        '$fecha_nacimiento','$estado_civil','$especialidad','$direccion','$email','$telefono',
        '$gSanguineo',$peso,$altura,'$medicinas','$alergias','$patologias')";

    $success = mysqli_query($conn,$query_insert);

    if ($success){
        echo "Datos guardados correctamente";
    }else{
        echo "problemas al guardar datos";
    }

?>