<?php
    session_start();
    // con sesión Start la utilizaremos para enviar los mensajes obtenidos o los parámtros obtenidos
    // de cada consulta respectiva con la base de datos.
    $conn = mysqli_connect(
        'localhost',
        'root',
        '',
        'Colegio_cloud'
    );

?>