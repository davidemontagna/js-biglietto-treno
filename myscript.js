let numeroKm = prompt("Inserisci il numero di km che vuoi percorrere:");
let userAge = prompt("Inserisci la tua età:");

let prezzo = numeroKm * 0.21;
let prezzoFinale;

if (userAge < 18){

    sconto = (prezzo / 100) * 20;
    prezzoFinale = prezzo - sconto;

}else if (userAge >= 65){

    sconto = (prezzo / 100) * 40;
    prezzoFinale = prezzo - sconto;

}else{

    prezzoFinale = prezzo;

}

document.writeln("Il prezzo del biglietto è:" + " " + prezzoFinale.toFixed(2) + "\u20AC");

