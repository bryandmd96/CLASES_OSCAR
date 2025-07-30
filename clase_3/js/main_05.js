//funciones
function saludar(nombre) {
    return `Hola, ${nombre}`;
}
console.log(saludar("Lucia")); // Hola, Lucia

//funciones anonimas o funciones lamda
const saludar = nombre => `Hola, ${nombre}`;
const cuadrado = n => n * n;
const mostrarMensaje = () => console.log("Hola mundo");
const multiple = (a, b) => a * b;

// parametros nominal o posicionales
function saludar(nombre = "invitado") {
    return `Hola, ${nombre}`; 
}
console.log(saludar()); //Hola invitado

// funciones con parametros indeterminados
function crarSaludo() {
    
}

//decoradores
