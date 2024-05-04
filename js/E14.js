function modifica(tipo){
    lista = document.getElementById("lista");
    switch(tipo){
        case 'D':
            var elemento = document.createElement("li");
            var texto = document.createTextNode("Nuevo DOM")
            elemento.appendChild(texto);
            lista.appendChild(elemento);
            break;
       
            case 'H':
            var nuevoElemento ="<li>Nuevo HTML</LI>";
             lista.innerHTML = lista.innerHTML + nuevoElemento;
             break;   

            default:
                alert("Elimina");
            elemento_li = document.getElementsByTagName("li");
            lista.removeChild(elemento_li[elemento_li.length-1]);    
    }
}