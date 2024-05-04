function esPar(numero){
    var resultado = parImpar(numero);
    alert("El numero "+numero+" es "+resultado);
}
function parImpar(numero){
    if(numero % 2 == 0) return "par";
    else return "impar";
}
