// LAS FUNCIONES SE PUEDE ESCRIBIR DE 2 FORMAS

// ESTRUCTURAS
// function name(params) {

// }

// UNA FUNCION RECIBE ARGUMENTOS, EL VALOR DE UN ARGUMENTO
// ES LO QUE COLOCAMOS DENTRO DEL PARENTESIS

function iterar(arg1) {
  for (let i = 0; i < arg1.length; i++) {
    console.log(arg1[i]);
  }
}
const numeros = [1, 2, "Hola", 4, 5];
const nombres = [
  "Pedro",
  "Juan",
  "Felipe",
  "Cahnchito Feliz",
  "Chanchito Triste",
];

iterar(numeros);
iterar(nombres);

// REUTILIZACION DE CODIGO DENTRO DE CUALQUIER PARTE QUE LO NECESITEMOS
