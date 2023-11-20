// SE ESCRIBE PARALABRA RESERVADA FUNCTION

function suma(a, b) {
  //   console.log(a + b);
  return a + b; //PALABRA RESERVADA PARA EJECUTAR FUNCIONES
  //   La palabra reservada return nos permite devolver información de la ejecución de una función.
  // Cuando se utiliza la sentencia return la ejecución de la función se detiene, por lo que si hay más código después, este no será ejecutado.
}

// La sentencia return finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función.

const resultadoSuma1 = suma(1, 2);
const resultadoSuma2 = suma(5, 6);
const resultadoSuma3 = suma(resultadoSuma1, resultadoSuma2);

console.log("resultado", resultadoSuma3);
