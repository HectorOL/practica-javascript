const agregar = () => {
    const materia = document.getElementById('materia').value;
    const nota = Number.parseFloat(document.getElementById('calificacion').value);
    if (Number.isNaN(nota) || nota < 0 || nota > 100) {
        alert('Ingrese una materia y una calificación válida');
        return;
    }else{
        const calificaciones = document.getElementById('calificaciones');
        calificaciones.innerHTML += `<tr> 
                                        <td>${materia}</td> 
                                        <td>${nota}</td> 
                                    </tr>`;
        promedio();
    }
}

const promedio = () => {
    const calificaciones = document.getElementById('calificaciones');
    const filas = calificaciones.getElementsByTagName('tr');
    let suma = 0;

    for (let i = 1; i < filas.length; i++) {
        const celdas = filas[i].getElementsByTagName('td');
        console.log(celdas[0]);
        suma += Number.parseFloat(celdas[1].innerText);
    }

    const promedio = suma / (filas.length - 1);
    document.getElementById('promedio').innerText = promedio;
}
