function runProgram() {
    let numero;

    
    while (true) {
        numero = prompt("Ingrese un numeral entre 1 y 9:");

        
        if (numero !== null && !isNaN(numero) && numero >= 1 && numero <= 9) {
            numero = Number(numero); 
            break; 
        }

        alert("Numero invalido! Ingrese un numeral entre 1 y 9.");
    }

   
    let randomNum = Math.floor(Math.random() * 9) + 1;
    
    
    let intento = prompt(`Cree que el numero es mayor o menor que ${numero}? (Type 'mayor' or 'menor')`).toLowerCase();

    
    let respuesta = randomNum > numero ? "mayor" : (randomNum < numero ? "menor" : "igual");


    if (intento === respuesta) {
        alert(`Correcto! El numero secreto era ${randomNum}.`);
    } else {
        alert(`Incorrecto! El numero secreto era ${randomNum}.`);
    }

    console.log(`Su numero: ${numero}, Numero secreto: ${randomNum}, Su respuesta: ${intento}, Respuesta correcta: ${respuesta}`);

   
    let restart = confirm("Quiere jugar de nuevo?");
    
    if (restart) {
        runProgram(); // Restart the program
    } else {
        console.log("Programa cerrado.");
    }
}


runProgram();
