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
// Parola dell'utente
// Messaggio di risposta

// INPUT
// L'utente iserisce una parola
const userWord = prompt("Inserisci una parola");

// ELABORAZIONE DATI
// Viene chiamata la funzione che controlla se la parola è palindroma
const userWordPalindrome = isPalindrome(userWord);
console.log("palindrome?", userWordPalindrome);

// SE la funzione ritorna true, il messaggio di risposta conterrà la stringa "La parola è un palindromo"
// ALTRIMENTI il messaggio di risposta conterrà "La parola non è un palindromo"

// OUTPUT
// Viene Mostrato il messaggio

// FUNZIONI
/**
 * Description La funzione crea una variabile provvisoria
 *              Un ciclo for riempirà la variabile con la parola fornita come parametro letta al crontrario
 *              SE la parola del parametro corrisponde a quella invertita nella variabile ritorna true
 * @param {string} 
 * @returns {boolean}
 */
function isPalindrome(word) {
    console.log(word);
    wordIsPalindrome = false;

    // Variabile che conterrà la stringa invertita
    let invertedWord = "";
    console.log("before", invertedWord);

    // Ciclo for che inverte la stringa
    for (let i = word.length - 1; i >= 0; i--) {
        invertedWord += word[i];
        console.log("inverted",invertedWord);
        console.log(i);
    }

    // Costrutto che controlla la corrispondenza tra la parola e la sua verisone inveritita
    if (word === invertedWord) {
        wordIsPalindrome = true;
    }

    return wordIsPalindrome;a
}