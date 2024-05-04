window.onlod = function(){

    var info = document.getElementById("informacaion");

    var enlaces = document.getElementsByTagName("a");

    var innerHTML = "Numero de enlaces = "+enlaces.length;

    var mensaje = "El pen&uacute;iltmo enlace apunta a: "+enlaces[enlaces.length-2].href;

    info.innerHTML = info.innerHTML + "<br/>" +mensaje;

    var contador = 0;

    for (var i=0; i<enlaces.length; i++)

    if(enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/")
    contador++;

    info.innerHTML = info.innerHTML + "<br/>" + contador + "enlaces apuntan a hhtp://prueba"

    var parrafos = document.getElementsByTagName("p");
    enlaces = parrafos[2].getElementsByTagName("a");

    info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces de tercer parrafo = "+enlaces.length;



}