debugger

//Calcular cuotas monto determinado

    let nombre = prompt("Ingrese su nombre por favor").toUpperCase();
    alert("Hola " + nombre)

function credito(prestamo, interes, cuotas) {
    alert("El monto a devolver es de $" + prestamo * interes);
    alert("El valor de cada una de las cuotas es de $" + (prestamo * interes) / cuotas);
 
    let resultado = 0;
    console.log(resultado);
    return resultado;
    
}
let prestamo = parseFloat(prompt("Ingrese el monto que desea recibir como préstamo: "));
alert("El interés que se sumará en el monto a devolver es del 35%");
interes = 1.35;
let cuotas = prompt("Ingrese la cantidad de cuotas que desea para pagar su préstamo: ");

credito(prestamo, interes, cuotas);
