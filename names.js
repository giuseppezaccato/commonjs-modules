//task creo funzione
function person(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}
console.log(person("Giuseppe", "Zaccato"))

//task esporto modulo come oggetto CommonJS

module.exports = person;
