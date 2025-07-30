for (let i = 0; i < array.length; i++) {
    const element = array[i];  
}

//bucle confirmando condicion
let i = 1;
while (i <= 5) {
    console.log("Iteración: ", i);
    i++;
}

//do while no confirma condicion 
i = 1;
do {
    console.log("Valor: ", i);
    i++;
} while (i <= 3);

//bucle infinito
let cont = 0;
while (true) {
    cont++;
    if (cont != 10) {
        console.log("hola", cont);
    };
}

// texto constante o tuplas en python
const fruta = [manzana, banana, uva];
for(let fruta of fruta) {
    console.log(fruta);
}

//objetos en JS
const persona = {
    nombre: "Ana",
    edad: 28,
    ciudad: "Madrid"
};
/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */

//continuos
//break