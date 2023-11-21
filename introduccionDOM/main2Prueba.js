window.onload = () => {
  //   //EVENTO DE WINDOW ONLOAD ESPERA A QUE TODO EL CONTENIDO DE NUESTA PAGINA SE ENCUENTRE CARGADO
  //   console.log("intro a DOM desde main.js");

  //   // ACCEDER AL ID DEL DOM
  //   // const parrafo = document.getElementById("text");
  //   const parrafo = document.getElementById("text");
  //   console.log(parrafo.innerText);
  //   console.log(parrafo.innerHTML);

  //   //   CAMBIAR TEXTO
  //   const parrafo = document.getElementById("text");
  //   parrafo.innerHTML = "Texto actualizado";

  // COLOCAR MAS HTML DENTRO DE NUESTA ETIQUETA DE PARRAFO
  const parrafo = document.getElementById("text");
  parrafo.innerHTML = "<li> elemento 1</li><li> elemento 2</li>";
};
