// FAT ARROW FUNCTION

// NO SE UTILIZA LA PALABRA RESERVADA FUNCTION

// const miFatArrowFunction = () => LOGICA QUE QUERAMOS EJECUTAR
const miFatArrowFunction = (a, b) => a + b; //UNA LINEA NO UTILIZA LLAVES
const otraFAF = (a, b) => {
  //MAS DE UNA LINEA ES NECESARIO COLOCAR LLAVES
  return a + b;
};
// const r = miFatArrowFunction(1, 2);
const r = otraFAF(1, 2);
console.log(r);
