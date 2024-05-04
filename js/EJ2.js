const agregar = () => {
    const input = document.getElementById('nueva').value;
    const notas = document.getElementById('notas');

    notas.innerHTML += `<div id="nota-${notas.childElementCount + 1}">
                            <p >${input}</p>
                            <button id="1" onclick="eliminar(${notas.childElementCount + 1})">Eliminar</button>
                        </div>`;
}

const eliminar = (id) => {
    const nota = document.getElementById(`nota-${id}`);
    nota.remove();
}