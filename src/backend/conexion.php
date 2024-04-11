<?php
// Definir las credenciales de la base de datos
$servidor = "localhost"; // Puede ser diferente si el servidor MySQL está en otro lugar
$usuario = "root"; // Nombre de usuario de la base de datos
$contraseña = ""; // Contraseña de la base de datos
$base_de_datos = "paso-a-paso"; // Nombre de la base de datos

// Crear una nueva conexión
$conexion = new mysqli($servidor, $usuario, $contraseña, $base_de_datos);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}
?>
