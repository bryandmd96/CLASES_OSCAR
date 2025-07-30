let edad = 17;

if (edad >= 18) {
    console.log("Mayor de edad");
} else {
    console.log("Menor de edad");
}


let nota = 7;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 6) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}


let usuario = "admin";
let mensaje = (usuario === "admin") ? "Bienvenido administrador" : "Acceso restringido";
console.log(mensaje);

let usuario = "admin";
let activo = true;

if (usuario === "admin") {
    if (activo) {
        console.log("Admin activo");
    } else {
        console.log("Admin inactivo");
    }
}


edad = 20;
let suscrito = true;

if (edad >= 18 && suscrito) {
    console.log("Acceso completo");
}

if (edad >= 18 || suscrito) {
    console.log("Acceso completo");
}


let dia = "lunes";

switch (dia) {
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("Fin de semana cerca");
        break;
    case "sábado" || "domingo":
        console.log("Es finde");
        break;
    default:
        console.log("Día común");
}

