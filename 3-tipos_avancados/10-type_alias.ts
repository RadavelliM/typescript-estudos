/*

type alias é um recurso que permite criar um tipo e determinar o que ele verifica

*/

// sem type alias
const showID = (id: string | number): string => `O id é ${id}`

console.log(showID(99))
console.log(showID("99"))


// com type alias (versao de union types)

type aliasID = string | number

function showId (id: aliasID): void {
    console.log(`O id é ${id}`)
}




// type alias tambem podem ser criados como objetos
type aliasPerson = {
    nome: string,
    idade: number
}

function showPerson(Person: aliasPerson) {
    console.log(`nome: ${Person.nome} e idade: ${Person.idade}`)
}

showPerson({nome: "teste", idade: 19})