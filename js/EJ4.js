const calcularIMC = () => {
    const peso = Number.parseFloat(document.getElementById("peso").value);
    const altura = Number.parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Los valores introducidos no son válidos");
        return;
    }else{
        const imc = peso / (altura * altura);
        if (imc < 18.5) {
            document.getElementById("resultado").innerText = `Tu IMC es de ${imc.toFixed(2)} lo que indica ` + "Bajo peso";
        } else if (imc < 24.9) {
            document.getElementById("resultado").innerText = `Tu IMC es de ${imc.toFixed(2)} lo que indica ` + "Normal";
        } else if (imc < 29.9) {
            document.getElementById("resultado").innerText = `Tu IMC es de ${imc.toFixed(2)} lo que indica ` + "Sobrepeso";
        } else {
            document.getElementById("resultado").innerText = `Tu IMC es de ${imc.toFixed(2)} lo que indica ` + "Obesidad";
        }
    }
}