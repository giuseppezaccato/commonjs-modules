//task creo funzione
function person(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

//task console di controllo
// console.log(person("Giuseppe", "Zaccato"))

//task esporto modulo come elemento CJS
module.exports = person;
