<?php 

    include('../connection/connection.php');
    
    $usuario = $_POST['user'];
    $clave = $_POST['clave'];
    $query_consulta_login = "SELECT cedula FROM usuarios WHERE usuario='$usuario' and clave ='$clave'";
    $result_login = mysqli_query($conn,$query_consulta_login);
    if (!$result_login){
        die('Error al cargar datos'.mysqli_error($conn));
    }
    $json = array();
    while($rows = mysqli_fetch_array($result_login)){
        $json[] = array(
            'cedula' => $rows['cedula']
            );
        }
    $jsonString = json_encode($json);
    echo $jsonString;
?>