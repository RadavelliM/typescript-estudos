/*

nem sempre os objetos possuem as propriedades que poderia possuir
devido a isso, existe as propriedades opcionais

nesse caso deve ser usado uma interrogação
{nome: string, sobrenome?: string}

*/


const user: {nome: string, sobrenome?: string} = {
    nome: "teste"
}


const numberObject: {a: number; b: number; c?: number} = {
    a: 10,
    b: 20
}

const printNumber = (numeros: {a: number, b: number, c?:number}): void => {
    console.log(numeros.a)
    console.log(numeros.b)
    console.log(numeros.c || "")
}

printNumber(numberObject)


// ---------------------------------------------------------------------------


const greeting = (firstName: string, lastName?: string): string => {
    const fullName: string = lastName?.trim() ? `${firstName} ${lastName}` : `${firstName}`
    return `Olá, ${fullName}`
}
console.log(greeting("Type"))
console.log(greeting("Type", "Script"))





const greetingAdvanced = (firstName: string, lastName?: string): string => `Olá ${firstName} ${lastName || ""}`

console.log(greetingAdvanced("Type"))
console.log(greetingAdvanced("Type", "Script"))