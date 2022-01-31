function getRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min +1)) + min;

}

function checkPariDispari(numero) {

    let ritorno;

    if (numero % 2 == 0) {
        ritorno = "PARI";
    } else {
        ritorno = "DISPARI";
    }

    return ritorno;

}

let pariDispari = prompt('Scegli pari o dispari').toUpperCase();

if (pariDispari == "PARI" || pariDispari == "DISPARI") {

    let numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 5'));

    if ((numeroUtente >= 1 && numeroUtente <= 5) && !isNaN(numeroUtente)) {

        let numeroComputer = getRandomNumber(1, 5);
        let somma = numeroComputer + numeroUtente;
        let verificaSomma = checkPariDispari(somma);

        console.log("Il numero del computer è: " + numeroComputer);
        console.log("L'utente ha inserito: " + numeroUtente);
        
        if (verificaSomma == pariDispari) {
            alert('Hai vinto');
        } else {
            alert('Ha vinto il computer');
        }

    } else {
        alert('Hai inserito un valore non valido');
    }

} else {
    alert('Hai inserito un valore non valido');
}
 
