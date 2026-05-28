/*

interface é outra maneira de declarar tipos de um objeto
determinar nome para um tipo e escolher as propriedades e tipos

sintaxe:
interface NomeMaiusculo {
    chave: tipo
}

*/

// forma de padronizar os objetos de forma organizada

interface Coordinates {
    X: number,
    Y: number
}



function printCoordinates(Coordinates: Coordinates): string {
    return `
        O ponto X é: ${Coordinates.X}
        O ponto Y é: ${Coordinates.Y}
    `
}




// -----------------------------------



interface User {
    id: number,
    email: string,
    nome: string,
    idade: number
}

const userObjt: User = {
    id: 2394,
    email: "usuario@gmail.com",
    nome: "teste",
    idade: 24
}

console.log(userObjt)



