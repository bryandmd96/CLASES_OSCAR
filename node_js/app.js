console.log("Hola, Nodejs");
const nombre = "pedro";
const edad = 25;

// variables
console.log("Mi nombre ", nombre," Mi edad", edad);

console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`);

// funcion
function saludar(nombre){
        return`Hola ${nombre}`;
}

console.log(saludar("Bryan"));

// exportacion de datos por modulo a otros js
module.exports = saludar;

// importacion de datos especificos 
