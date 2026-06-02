/*


generics functions esta relacionada a quando o tipo do retorno é relacionado ao tipo do argumento


*/

// generics é posto com simbolo de diamante ( <> )
function firstElement<T>(arr: T[]): T | undefined {
    return arr[0]
}

console.log(firstElement([1, 2, 3, 4, 5]))
console.log(firstElement(["a", "b"]))
console.log(firstElement(["a", true, [], 4])) // aceita qualquer tipo pois é generico


// console.log(firstElement(1234)) ERRO -> nao é uma lista





function mergeObjects <U, T> (objt1: U, objt2: T) {
    return {
        ...objt1,
        ...objt2
    }
}


const user1: {nome: string} = {
    nome: "teste"
}

const user2: {idade: number} = {
    idade: 21
}

console.log(mergeObjects(user1, user2))