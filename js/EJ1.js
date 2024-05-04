const calcular = () => {
    let num1 = Number.parseFloat(document.getElementById('num1').value);
    let num2 = Number.parseFloat(document.getElementById('num2').value);
    let operacion = document.getElementById('op').value;

    if(operacion == 'suma') {
        document.getElementById('resultado').innerHTML = "El resultado es: " + suma(num1, num2);
    } else if(operacion == 'resta') {
        document.getElementById('resultado').innerHTML = "El resultado es: " + resta(num1, num2);
    } else if(operacion == 'multiplicacion') {
        document.getElementById('resultado').innerHTML = "El resultado es: " + multiplicacion(num1, num2);
    } else if(operacion == 'division') {
        document.getElementById('resultado').innerHTML = "El resultado es: " + division(num1, num2);
    }
}

const suma = (a, b) => {
    return a + b;
}

const resta = (a, b) => {
    return a - b;
}

const multiplicacion = (a, b) => {
    return a * b;
}

const division = (a, b) => {
    return a / b;
}