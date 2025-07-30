let x = 5;
console.log(x + 2); // 7
console.log(x % 2); // 1
console.log(x ** 2); // 25


x = 10;
x = x + 1;
x += 1;
x++;
x--;
x += 5; // 15
x *= 2; // 30



console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(7 >= 7);     // true
console.log(7 != 8); //true


let tieneEdad = true;
let tieneDNI = false;

console.log(tieneEdad && tieneDNI); // false
console.log(tieneEdad || tieneDNI); // true
console.log(!tieneDNI);             // true

let edad = 20;
if (edad >= 18){
    acceso = 'Permitido'
}else{
    acceso = 'Denegado'
};

let acceso = (edad >= 18) ? "Permitido" : "Denegado";
console.log(acceso); // Permitido

let nombre = "Juan";
let saludo = "Hola, " + nombre;
console.log(saludo); // Hola, Juan

let producto = "camisa";
let precio = 20;
console.log(`El precio de la ${producto} es $${precio}`);
