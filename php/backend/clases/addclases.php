<?php

include('../../connection/connection.php');

$especialidad = $_POST['especialidad'];
$materia = $_POST['materia'];
$cedula = $_POST['cedula'];
$Nombres = $_POST['Nombres'];

$first_query = "SELECT *FROM Asignaturas_colegio WHERE director_cedula='$cedula'";
$result = mysqli_query($conn,$first_query);

if (mysqli_num_rows($result) == 0){
    $query_success = "INSERT INTO Asignaturas_colegio VALUES ('$especialidad','$materia', '$cedula','$Nombres') ";
    $success = mysqli_query($conn,$query_success);
    echo "Datos guardados correctamente";
}else{
    echo "El docente que va a agregar ya tiene clases asignadas";
}



?>