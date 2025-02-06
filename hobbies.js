
//task funzione che ritorna array hobbies
//* piccolo bonus : uso il ...rest come argomento da passare nella funzione(sembra funzionare)
function freeTime(...hobbies) {

    //task array vuoto da riempire temporaneamente
    let tempoLibero = []

    // //? funzione randomizzatrice integrabile direttamente senza doverla customizzare!
    const indice = Math.floor(Math.random() * hobbies.length);

    tempoLibero.push(...hobbies);
    return tempoLibero[indice]
}

//? console.log di prova
console.log(freeTime("tennis", "football", "coding", "gaming", "reading"))

//task esporto oggetto intero CJS
module.exports = {
    freeTime
}

//fix ricorda che quando esporti un oggetto è conveniente destrutturarlo prima di averne accesso!
//! in questo caso è esattamente uguale a:
// module.exports = freeTime
