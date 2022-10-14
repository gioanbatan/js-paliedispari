// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.
// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// **Consigli del giorno**
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
// Buon lavoro e buon divertimento! :faccia_leggermente_sorridente: :paperella:

// DATI
// Scelta pari o dispari dell'utente
let userEvenOrOdd = parseInt(prompt("Inserire 1 per pari o 2 per dispari"));
console.log("User 1=Even 2=Odd", userEvenOrOdd);
// Numero fornito dall'utente
const userNumber = parseInt(prompt("Inserire un numero da 1 a 5"));
console.log("User Numb", userNumber);

// Numero random del computer
const computerNumber = rndNumb(1, 5);
console.log("PC Numb", computerNumber);

// INPUT
// L'utente selezione pari o dispari
// l'utente inserisce un numero da 1 a 5

// ELABORAZIONE
// Viene calcolato il numero random del pc da 1 a 5
// Viene sommato il numero dell'utente con quello del pc
// SE la somma dei due numeri è un numero pari E l'utente ha deciso pari OPPURE la somma dei due numeri è un numero dispari E l'utente ha deciso dispari
    // ALLORA il messaggio sarà "L'utente ha vinto"
// ALTRIMENTI il messaggio sarà "Il computer ha vinto"

// OUTPUT
// Viene mostrato il messaggio

// FUNZIONI
function rndNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }