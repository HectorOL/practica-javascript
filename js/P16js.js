function muestra() {
    var oTbl = document.getElementById('tabla');
    var opTabla = document.getElementById('opTabla');
    var oElemento = document.getElementById('contenido');
    var sValor = opTabla.value;
    var nTabla, i, oLinea, oCeldaOpe, oCeldaRes, oCeldaCal, oCtrl;

    if (isNaN(sValor)) {
        alert("Debe elegir la tabla de multiplicación");
    } else {
        nTabla = parseInt(sValor, 10);
        oElemento.style.visibility = "visible";
        oTbl.innerHTML = ""; // Limpiar tabla anterior

        // Agregar encabezado de nuevo
        var header = oTbl.createTHead();
        var row = header.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = "<b>Operación</b>";
        cell2.innerHTML = "<b>Resultado</b>";
        cell3.innerHTML = "<b>Calificación</b>";

        // Generar filas de la tabla
        for (i = 1; i <= 10; i++) {
            oLinea = oTbl.insertRow(-1);
            oCeldaOpe = oLinea.insertCell(0);
            oCeldaRes = oLinea.insertCell(1);
            oCeldaCal = oLinea.insertCell(2);

            oCeldaOpe.innerHTML = `${nTabla} * ${i}`;
            oCeldaCal.id = "calificacion" + i; // Asignar un ID correcto

            oCtrl = document.createElement("input");
            oCtrl.type = "text";
            oCtrl.id = "txtResultado" + i;
            oCeldaRes.appendChild(oCtrl);
        }
    }
}

function calificar() {
    var opTabla = document.getElementById('opTabla').value;
    var nTabla = parseInt(opTabla, 10);
    var correctas = 0;

    for (var i = 1; i <= 10; i++) {
        var userInput = document.getElementById("txtResultado" + i).value;
        var correcto = nTabla * i;
        var calificacionCelda = document.getElementById("calificacion" + i);

        if (parseInt(userInput) === correcto) {
            calificacionCelda.innerHTML = "<span style='color:green'>Correcto!</span>";
            calificacionCelda.parentNode.style.backgroundColor = ""; // Quitar color de fondo si es correcto
            correctas++;
        } else {
            calificacionCelda.innerHTML = "<span style='color:white'>Incorrecto</span>";
            calificacionCelda.parentNode.style.backgroundColor = "red"; // Colorear toda la fila si es incorrecto
        }
    }
    document.getElementById("aciertos").innerText = correctas; // Actualizar el label con el número de aciertos
}
