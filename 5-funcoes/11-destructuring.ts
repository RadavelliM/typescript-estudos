/*


para usar o destructuring com TS, é preciso tipar cada dado que sera retirado
desta maneira o TS consegue validar os dados desetruturados


*/





// ------------------ destructuring de objetos ---------------------


// destructuring simples
const user: {nome: string, idade: number} = {
    nome: "teste",
    idade: 44
}

const {nome} = user
console.log(nome)






// destructuring de props de em uma funcao
function detalhesProduto({nome, preco}: {nome: string, preco: number}): string {
    return `O preço do produto ${nome} é R$${preco}`
}

const produto: {nome: string, preco: number} = {
    nome: "Camisa",
    preco: 50.00
}

console.log(detalhesProduto(produto))









// ------------- destructuring de array --------------

const lista: number[] = [1, 2, 3, 4, 5]
const [a] = lista

console.log(a)
console.log(typeof a)



const [x, y, z = 100] = lista
console.log(x, y, z)