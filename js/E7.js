
function info(cadena){

var resultado = "La cadena \""+cadena+"\" ";

if(cadena == cadena.toUpperCase())
resultado += " esta formada solo por mayusculas";
else if(cadena == cadena.toLowerCase())
resultado += " esta formada solo por minusculas";
else
resultado += " esta formada por mayusculas y minisculas";
return resultado;
}

alert(info("OVNI = OBJETO VOLAR NO INDENTIFICADO"));
alert(info("En algun lugar de la mancha"));
alert(info("aprendiendo javascript..."));
