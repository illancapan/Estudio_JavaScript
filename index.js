// console.log('Hola Mundo');

// // ***** TIPOS DE DATOS  EN JS *****

// // String: cadena de caracteres. 'a' 'hola mundo' se puede utilizar comillas '' o "".
// // Boolean: true o false.
// // Null: nulo. vacio no contiene datos.
// // Number: 123456787 se puede escribir cualquier numero.
// // Undefined:  es algo que no se encuentra definida en cmabio 'nulo' se encuentra definido.
// // Object: objeto agrupa todos los tipos de datos

// // ***** DEFINICION DE VARIABLES *****
// // var
// // let --> Se puede cambiar es una variable mutable.
// // const

// // var miPrimeraVariable = 'lala'
// let miPrimeraVariable = 'Mi primera variable!'
// // console.log(miPrimeraVariable);

// miPrimeraVariable = 'Esto ha cambiado'
// // console.log(miPrimeraVariable);

// let miBoolean = true
// let miOtroBoolean = false

// let miNumero = 0
// let miNumero2 = 12
// let miNumero3 = -258

// // console.log(miNumero, miNumero2, miNumero3, miBoolean, miOtroBoolean);

// let undef
// // console.log(undef);

// let nulo =  null
// // console.log(nulo);

// // ***** DEFINICION DE OBJETOS *****

// // objeto vacio
// // const miPrimerObjeto = {}

// // objeto agrupaciones de fatos que hacen sentido entre si
// const miObjeto = {
//     unNumero: 12,
//     unString: 'Esta cadena de caracteres',
//     unaCondicion: true,
// }
// // console.log(miObjeto.unString);

// const arrVacio = []
// const arr = [1, 2, 'Hola', 'Mundo', miObjeto]

// // console.log(arrVacio, arr);

// arrVacio.push(5)
// arrVacio.push(6)
// arrVacio.push(7)
// arrVacio.push(8)
// arrVacio.push(miPrimeraVariable)

// // console.log(arrVacio);

// // ***** OPERADORES MATEMATICOS *****

// const suma = 1 + 2
// const resta = 1 - 2
// const multiplicar = 2 * 3
// const division = 9 / 3

// // console.log(suma ,resta ,multiplicar, division)

// const modulo = 10 % 3
// // console.log(modulo)

// // const num = 5
// // const no nos deja cambiar el objeto u otra variable, solo sus propiedades.
// let num = 5
// // num++

// // num--

// num += 5
// num -= 5
// num *= 5
// num /= 2
// // console.log(num)

// // ***** OPERADORES DE COMPARACIÓN *****

// const resultado1 = 5 ===  6 // comparacion de resultado exacto
// const resultado2 = 5 == '5' // igualdad no estricta, string pueden ser iguales a numeros si el valor es el mismo

// const resultado3 = 5 < 6
// const resultado4 = 5 < 5
// const resultado5 = 5 > 6
// const resultado6 = 5 > 4
// const resultado7 = 5 <= 5
// const resultado8 = 5 <= 6
// const resultado9 = 5 >= 6
// const resultado10 = 5 >= 6

// const resultado11 = 5 !==  '6'
// const resultado12 = 5 != '5'

// // console.log(resultado11, resultado12)

// // OR ||, AND &&, NOT !

// const resultadoOr = true || false // TOMA EL PRIMER VALOR INDICADO.

// // console.log(resultadoOr)

// const resultadoAnd = true && true
// // console.log(resultadoAnd);

// const resultadoNot = !false
// // console.log(resultadoNot)

// // ***** CONTROL DE FLUJOS *****

// // ***** CONTROL DE FLUJO IF *****

// // const edad = 5
// if (edad > 5 && edad < 18) {
// console.log('El niño puede jugar');
// } else {
//     console.log('El niño no puede jugar')
// }

// if (false) {
//     console.log('Estoy dentro de un IF')
// }

// ***** CONTROL DE FLUJO WHILE *****

// let x = 0
// while (x < 5) {
//     console.log(x);
//     x++
// }

// console.log('Teminando el Loop')

// let x = true
// while (x) {
//     console.log(x);
//     x = false
// }

// console.log('Teminando el Loop');

// let x = false
// while (x) {
//     console.log(x);
//     x = false
// }

// console.log('Teminando el Loop');

// ***** CONTROL DE FLUJO SWITCH *****

// let y = 3;

// switch (y) {
// case 1: {
//     console.log('yo soy el caso 1')
//     break;
// }
// case 2: {
//     console.log('chanchito feliz')
//     break;
// }
// case 3:
//     console.log('chanchito triste:(');
//     break;

// default:
//     console.log('no hay chanchitos! :(');
//     break;
// }

// ***** CONTROL DE FLUJO FOR *****

// for (let i = 0; i < 10; i++ ) {
//     console.log(i)
// }

// ***** ACCEDER A ARREGLOS *****

// const numeros = [1, 2, 'HOLA', 4, 5]
//     // console.log(numeros[5])

//  for (let i = 0; i < numeros.length; i++ ) {
//      console.log(numeros[i])
//  }

// ***** INTRODUCCION A FUNCIONES *****

// function iterar() {
//     const numeros = [1, 2, 'HOLA', 4, 5]

//     for (let i = 0; i < numeros.length; i++ ) {
//           console.log(numeros[i])
//         }
// }

// iterar()
// iterar()

// function iterar(arg1) {

//     for (let i = 0; i < arg1.length; i++ ) {
//         console.log(arg1[i])
//         }
// }

// const numeros = [1, 2, 'HOLA', 4, 5]
// const nombres = ['Pedro', 'Juan', 'Felipe', 'Chanchito Feliz', 'Chanchito triste']

// iterar(numeros)
// iterar(nombres)

// function suma(a, b) {
//   return a + b;
// }
// const resultadoSuma1 = suma(1, 2);
// const resultadoSuma2 = suma(5, 6);
// const resultadoSuma3 = suma(resultadoSuma1, resultadoSuma2);

// console.log("resultado", resultadoSuma3);

// ***** CALLBACKS *****

// function sumar(a, b, cb) {
//   const r = a + b;
//   cb(r);
// }

// function callback(result) {
//   console.log("resultado", result);
// }

// // // CALLBACK

// // sumar(2, 3, callback);

// // ***** FAT ARROW FUNCTIONS *****

// // const miFatArrowFunction = (a, b) => a + b;
// // const otraFaf = (a, b) => {
// //   return a + b;
// // };
// // const r = miFatArrowFunction(1, 2);
// // console.log(r);

// const miFatArrowFunction = (a, b) => a + b;
// const otraFaf = (a, b) => {
//   return a + b;
// };
// const r = otraFaf(1, 2);
// sumar(2, 3, function (r) {
//   console.log("soy una funcion anonima y mi resultado es", r);
// });
