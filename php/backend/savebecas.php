<?php
    include('../connection/connection.php');

    try{
        $tipo_beca = $_POST['Tipo'];
        $Cedula = $_POST['Cedula'];
        $Nombres = $_POST['Nombres'];
        $Comentarios = $_POST['Comentarios'];

        $query_insert = "INSERT INTO Becas_colegio VALUES('$tipo_beca', 
        '$Cedula', '$Nombres','$Comentarios')";
        $resultado = mysqli_query($conn,$query_insert);

        if (!$resultado){
            throw new Exception('Problemas al cargar los datos');
        }else{
            //echo "Datos guradados correctamene. ";
        }
        
        
    }catch(Exception $e){
        echo $e->getMessage();
        die();
    }
    
    
?>