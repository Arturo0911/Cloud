<?php
include('../php/connection/connection.php');
?>

<html lang="en">

<head >
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../statics/css/style.css" rel="stylesheet">
    <link href="../statics/css/new_inserts.css" rel="stylesheet">
    <link rel="shortcut icon" href="../statics/images/home.png">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
    <link rel="stylesheet" href="../statics/css/div.css">
    <!--<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>-->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous">
    </script>

    <script type="text/javascript" src="../js/lib/jquery-3.4.1.js"></script>
    <script src="../js/login.js"></script>
    <script src="../js/main.js"></script>

    <title>SEA</title>
</head>

<body>

    <header class="Header_class">
        <img class="logo" src="../statics/images/home.png" alt="logo">
        <ul class="nav__session" id="container">

        </ul>
        <nav id="Capaefectos">
            <ul class="nav__links">
                <li><a href="#" id="ocultar">Nuevos ingresos</a></li>
                <li><a href="#" id="cargando">Clases</a></li>
                <li><a href="#">Informes</a></li>
                <li><a href="#">Novedades</a></li>
                <li><a href="../mainpage.html">Principal</a></li>
            </ul>
        </nav>
        <a class="cta" id="mostrar" href=""><button>Contactos</button></a>
    </header>