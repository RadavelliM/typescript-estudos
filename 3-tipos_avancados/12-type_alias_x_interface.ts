/*

Diferenças entre type alias e interface

na maioria das vezes, pode-se escolher entre usar um e outro
a principal diferença é: interface pode ser alterada ao longo do codigo; type alias não

se é necessario mudar a forma como o objeto se comporta
usa-se a interface

*/





interface User {
    nome: string,
    idade: number
}

interface User { // <- isso não substitui a interface declarada antes, na real ela acrescenta uma propriedade
    id: number,
    email: string
}


function getUser (User: User): void {
    console.log(`O id do usuario é: ${User.id}`)
    console.log(`O email do usuario é: ${User.email}`)
    console.log(`O nome do usuario é: ${User.nome}`)
    console.log(`A idade do usuario é: ${User.idade}`)
}



type aliasPerson = {
    nome: string,
    idade: number
}

// ERRO: type alias duplicado identificado ↓

// type aliasPerson = {
//     nome: string,
//     idade: number
// }





/*

interface = let
type alias = const

*/