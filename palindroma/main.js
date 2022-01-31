function controlloPalindroma(parolaUtente) {

    //let parolaDaConfrontare = parolaUtente.split('').reverse().join('');

    //i topi non avevano nipoti
    
    parolaUtente = parolaUtente.replaceAll(' ', '');

    let parolaDaConfrontare = '';
    
    for(let i = parolaUtente.length -1; i>=0; i--) {
        parolaDaConfrontare += parolaUtente[i];
    }

    if (parolaUtente.toUpperCase() == parolaDaConfrontare.toUpperCase()) {
        return "La parola inseria è palindroma";
    } else {
        return "La parola inseria non è palindroma";
    }

}






let parolaUtente = prompt('Inserisci una parola');
let verifica = controlloPalindroma(parolaUtente);
console.log(verifica);