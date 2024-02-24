<?php

$datos = $_POST;
$nombre = $datos["nombre"];

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rick y Morty API</title>
    <link rel="manifest" href="manifest.json" />
    <link rel="stylesheet" href="styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>

    <header>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="images/icon.png" alt="Logo" width="40" class="d-inline-block align-text-top">
                  </a>
                  <button id="install-btn" type="button" class="btn btn-primary" style="display: none;">Instalar</button>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" href="index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="nosotros.html">Sobre nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="contacto.html">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    
    <?php 
        echo "<div class='gracias-content'>";
            echo "<h1>¡Muchas gracias por tu mensaje, $nombre!</h1>";
            echo "<p>Nos pondremos en contacto contigo a la brevedad.</p>";
            echo "<a href='index.html' class='btn btn-primary'>Volver al inicio</a>";
        echo "</div>";
    ?>

    <footer>
        <img src="images/icon.png" alt="Logo">
        <div class="footer-text">
            <p>Datos del alumno</p>
            <ul id="datosApiPhp"></ul>
        </div>
    </footer>
    
    <script src="script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>