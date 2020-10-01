// Ejercicio básico con uso de let y const
// Declaramos las variables nombre y edad, como cadena y número respectivamente, y les damos valores
let nombre:string = "Roberto López";
let edad:number = 41;
// Creamos la constante usuario con un array para asignarle una estructura
// que corresponda a los datos que hemos declarado previamente
const usuario : { nombre:string, edad:number } = {
    nombre: nombre,
    edad: edad
};
// Aquí imprimimos los datos que hemos declarado con la estructura que le hemos asignado
console.log(usuario);