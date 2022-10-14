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
let mesage = "";

// INPUT
// L'utente selezione pari o dispari
// Scelta pari o dispari dell'utente
let userEvenOrOdd = parseInt(prompt("Inserire 1 per pari o 2 per dispari"));
console.log("User 1=Even 2=Odd", userEvenOrOdd);
// Numero fornito dall'utente
// L'utente inserisce un numero da 1 a 5
const userNumber = parseInt(prompt("Inserire un numero da 1 a 5"));
console.log("User Numb", userNumber);

// ELABORAZIONE
// Numero random del computer
// Viene calcolato il numero random del pc da 1 a 5
const computerNumber = rndNumb(1, 5);
console.log("PC Numb", computerNumber);

// Viene sommato il numero dell'utente con quello del pc
// TEST 
console.log(isEvenNumb(5), isEvenNumb(6));

const finalNumb = sumTwoNumb(userNumber, computerNumber);
console.log(finalNumb);

// SE la somma dei due numeri è un numero pari E l'utente ha deciso pari OPPURE la somma dei due numeri è un numero dispari E l'utente ha deciso dispari
    // ALLORA il messaggio sarà "L'utente ha vinto"
// ALTRIMENTI il messaggio sarà "Il computer ha vinto"

// OUTPUT
// Viene mostrato il messaggio

// FUNZIONI

/**
 * Description Funzione per calcolare numeri casuali da 1 a 5
 * @param {int, float} min Numero minimo possibile
 * @param {int, float} max Numero massimo possibile
 * @returns {int} Numero intero da 1 a 5
 */
function rndNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

/**
 * Description Funzione per sommare due numeri
 * @param {int, float} firstNum Primo numero da sommare
 * @param {int, float} secondNum Secondo numero da sommare
 * @returns {int, float} Somma dei due numeri
 */
function sumTwoNumb(firstNum, secondNum) {
    return firstNum + secondNum;
}

/**
 * Description Funzione che ritorna true se il parametro è pari o false se il parametro è dispari
 * @param {int, float} numb Numero fornito da valutare
 * @returns {boolean} Valore booleano in risposta alla domanda "È pari?"
 */
function isEvenNumb (numb) {
    let result = false;
    if (numb % 2 === 0) {
        result = true;
    }

    return result;
}