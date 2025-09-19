// importacion de datos desde otro js
const saludar = require('./app');

console.log(saludar('Sergi'));

/* const NOMBRE = 'Bryan';
let edad = 23;
let email = 'bryandmd96@gmail.com';

if (edad > 18) {
    alert('Eres mayor')
} else {
    confirm('Eres menor?')
}

document.write('Su nombre es ', NOMBRE);
console.log("Y su email ", email)

let elemento = document.getElementsByClassName('rojo')[0];
elemento.textContent = 'Hola';

let elemento2 = document.getElementById('uno');
let h1 = document.getElementsByTagName('h1');   
let parrafos = document.getElementsByTagName('p');
parrafos[2].style.color = 'blue';

 */

//importar fs
const fs = require('fs');

fs.writeFileSync('mensaje.txt', 'Hola desde node');
const contenido = fs.readFileSync('mensaje.txt', 'utf-8');
console.log(contenido);