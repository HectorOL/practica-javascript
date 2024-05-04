function palindromo(cadena){

var resultado = "La cadena \""+cadena+"\" \n";

var cadenaOriginal = cadena.toLowerCase();

var letrasEspacios  = cadenaOriginal.split("");

var cadenasSinEspacios = "";

for(i in letrasEspacios)
if(letrasEspacios[i] != " ")
cadenasSinEspacios += letrasEspacios[i];

var letras = cadenasSinEspacios.split("");
var letrasReves = cadenasSinEspacios.split("").reverse();

var iguales = true;
for(i in letras)
if(letras[i] != letrasReves[i])
iguales = false;

if(iguales)
resultado += " es un palindromo";
else
resultado += " no es un palindromo";
return resultado;
}

alert(palindromo("La ruta nos aporto otro paso natural"));
alert(palindromo("Esta frase no se parece a ningun palindromo"));
