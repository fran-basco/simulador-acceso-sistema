// Pedir datos al usuario
let nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Ingrese su edad:"));
let contrasenia = prompt("Ingrese su contraseña (mínimo 6 caracteres):");

// Chequear los datos
if (nombre === "") {
    alert("Error: El nombre no puede estar vacío");
} else if (edad < 18 || isNaN(edad)) {
    alert("Acceso denegado: Debe ser mayor de 18 años y la edad debe ser un número");
} else if (contrasenia.length < 6) {
    alert("Contraseña inválida: Debe tener al menos 6 caracteres");
} else {
    // Mostrar datos en consola
    console.log("¡Bienvenido al sistema!");
    console.log("Datos del usuario:");
    console.log("Nombre: " + nombre);
    console.log("Edad: " + edad);
    console.log("Contraseña: " + contrasenia);

    // Calcular edad en 10 años
    let edadEn10Anios = edad + 10;
    alert("¡Hola " + nombre + "! Actualmente tenés " + edad + " años, y en 10 años tendrás " + edadEn10Anios + " años. Tu contraseña es " + contrasenia);
}