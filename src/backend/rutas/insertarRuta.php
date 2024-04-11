<?php
// Incluir el archivo de conexión a la base de datos
include './rutas/conexion.php';

// Verificar si el formulario ha sido enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $titulo = $_POST["titulo"];
    $ubicacion = $_POST["ubicacion"];
    $distancia = $_POST["distancia"];
    $descripcion = $_POST["descripcion"];
    $dificultad = $_POST["dificultad"];
    $usuario_id = $_POST["usuario_id"];


    // Preparar la consulta SQL para insertar una nueva ruta
    $sql = "INSERT INTO rutas (titulo, ubicacion, distancia, descripcion, dificultad, usuario_id) VALUES ('$titulo', '$ubicacion', '$distancia', '$descripcion', '$dificultad', '$usuario_id')";

    // Ejecutar la consulta
    if ($conexion->query($sql) === TRUE) {
        // Si la inserción fue exitosa, puedes redirigir al usuario a otra página o mostrar un mensaje de éxito
        echo "Nueva ruta añadida correctamente";
    } else {
        // Si ocurrió un error durante la inserción, mostrar un mensaje de error
        echo "Error al añadir la nueva ruta: " . $conexion->error;
    }
}
?>


