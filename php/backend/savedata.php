<?php
    include('../connection/connection.php');
    $cedula = $_POST['cedula'];
    $Nombres = $_POST['Nombres'];
    $Apellido = $_POST['Apellido'];
    $Fecha = $_POST['Fecha'];
    $Edad = $_POST['Edad'];
    $Sexo = $_POST['Sexo'];
    $Foto = addslashes(file_get_contents($_POST['Foto']['tmp_name']));
    $Estado = $_POST['Estado'];
    $Periodo = $_POST['Periodo'];
    $Direccion = $_POST['Direccion'];
    $Teléfono = $_POST['Teléfono'];
    $curso = $_POST['curso'];
    $Nombre_padre = $_POST['Nombre_padre'];
    $Telefono_padre = $_POST['Telefono_padre'];
    $Nombre_madre = $_POST['Nombre_madre'];
    $Telefono_madre = $_POST['Telefono_madre'];
    $Parentesco = $_POST['Parentesco'];
    $Telefono_emergencia = $_POST['Telefono_emergencia'];
    $Grupo = $_POST['Grupo'];
    $Peso = $_POST['Peso'];
    $Altura = $_POST['Altura'];
    $Medicinas = $_POST['Medicinas'];
    //echo "Esta cedula se está recibiendo: ".$cedula ;

    $query_insert = "INSERT INTO Alumnos_Data VALUES('$cedula','$Nombres','$Apellido','$Fecha','$Edad','$Sexo',
    '$Foto','$Estado','$Periodo','$Direccion','$Teléfono','$curso','$Nombre_padre','$Telefono_padre','$Nombre_madre','$Telefono_madre',
    '$Parentesco','$Telefono_emergencia','$Grupo',$Peso,$Altura,'$Medicinas')";

    $consult_insert =mysqli_query($conn,$query_insert);
    if ($consult_insert){
        echo "Datos ingresados correctamente.";
    }
    

?>