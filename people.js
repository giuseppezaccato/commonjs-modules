//task  importo singolo person da names.js
const person = require("./names.js")

//task importo oggetto da destrutturare da hobbies.js
//* SENZA DESTRUCTURING AVREI POTUTO OMETTERE LE GRAFFE IN QUESTO CASO!
const { freeTime } = require("./hobbies.js");

function newObj() {

    //task tentativo fallito chiamata api mi ritorna undefined 
    //task anche se metto l'oggetto DENTRO al .then(data=> ) 
    //task però il console log il nome e il cognome me lo recuperano! :(

    // let firstName;
    // let lastName;

    // fetch('https://randomuser.me/api/', { method: "GET" })
    //     .then(response => response.json())
    //     .then(data => {
    //         const nome = data.results[0].name.first;
    //         const cognome = data.results[0].name.last;
    //         console.log(nome, cognome); // Stampa sia nome che cognome
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });

    return {
        //* alla chiave FullName associo il valore che equivale all'evocazione della funzione person()
        FullName: person("Giuseppe", "Zaccato"),

        //* alla chiave TempoLibero assegno come valore l'evocazione di freeTime(che automaticamente estrae un random tra quelli aggiunti)
        TempoLibero: freeTime("tennis", "coding", "football", "crosswords", "reading", "running")
    }
}

//task console di prova
console.log(newObj());

