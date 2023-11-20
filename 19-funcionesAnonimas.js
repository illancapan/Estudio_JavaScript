function sumar(a, b, cb) {
  const resultado = a + b;
  cb(resultado);
}

sumar(2, 3, function (r) {
  console.log("soy una funcion anonima y mi resultado es", r);
});
