var nombre = "Luis";
console.log(nombre);  // Luis

var nombre = "Pedro"; // Se puede redeclarar
console.log(nombre);  // Pedro

let edad = 30;
edad = 31;  // Se puede reasignar
console.log(edad);  // 31

const PI = 3.14;
// PI = 3.1416; ❌ Error: no se puede cambiar
console.log(PI);

let mensaje = "Hola mundo";
let saludo = 'Hola con comillas simples';
let texto = `Hola con backticks`;

let entero = 10;
let decimal = 3.14;
let negativo = -50;


let esEstudiante = true;
let estaActivo = false;

let sinValor;
console.log(sinValor);  // undefined

let vacio = null;
console.log(vacio);  // null

let numeroGrande = 1234567890123456789012345678901234567890n;
console.log(typeof numeroGrande);  // bigint

let numeros = [1, 2, 3];
console.log(numeros[0]);  // 1

let persona = {
  nombre: "Laura",
  edad: 25
};
console.log(persona.nombre);  // Laura

function saludar() {
  return "Hola!";
}
console.log(typeof saludar);  // function


let a;
let b = null;
console.log(a); // undefined
console.log(b); // null

