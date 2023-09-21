const miObjeto = {
  unNumero: 12,
  unString: "Esta cadena de caracteres",
  unaCondicion: true,
};
console.log(miObjeto.unString);

const arrVacio = []; // --> PUEDEN ALMACENAR ELEMENTOS DE CUALQUIER TIPO DENTRO DE EL
const arr = [1, 2, "Hola", "Mundo", miObjeto];

console.log(arrVacio, arr);

arrVacio.push(5); //PUSH ES UN METODO*
arrVacio.push(6);
arrVacio.push(7);
arrVacio.push(8);

console.log(arrVacio);

//********** UNA LISTA ES UN SUBCONJUNTO DE UN ARRAY **********
