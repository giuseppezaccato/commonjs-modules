
//task esplicito array vuoto per *bonus
let hobbies = []

//task funzione che ritorna array hobbies
function freeTime(hob1, hob2, hob3, hob4) {
    hobbies.push(hob1, hob2, hob3, hob4);
    return hobbies;
}

//task funzione variabile random *bonus
const random = (max) => Math.floor(Math.random() * max);

//task esporto oggetto intero
module.exports = {
    hobbies,
    freeTime,
    random
}
