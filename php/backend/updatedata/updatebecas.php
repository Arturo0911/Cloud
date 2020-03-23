<?php

    include('../../connection/connection.php');
    $tipoBeca = $_POST['modificar_tipo_beca'];
    $cedula = $_POST['modificar_cedula'];
    $nombres = $_POST['modificar_nombres'];
    $comentarios = $_POST['modificar_comentarios'];

    $query = "UPDATE Becas_colegio SET tipo_beca='$tipoBeca',
        nombres_becado='$nombres', comentarios_becado='$comentarios'
        WHERE cedula_becado ='$cedula'";


    $success = mysqli_query($conn,$query);
    if ($success){
        echo "Datos guardados correctamente";
    }else{
        echo "Error";
    }




?>