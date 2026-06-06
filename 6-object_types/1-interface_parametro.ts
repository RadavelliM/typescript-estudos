/*


interfaces simplificam os parametros de objetos
ao inves de passar parametros de um objeto grande, usa-se apenas a interface


*/




interface Produto {
    nome: string,
    tamanho: number | string
    preco: number,
    disponivel: boolean
}


function detalhesProduto(produto: Produto):string {
    return `O produto ${produto.nome} custa R$${produto.preco}`
}







const produto: Produto = {
    nome: "meia",
    preco: 9.9,
    disponivel: false,
    tamanho: 12
}


console.log(detalhesProduto(produto))









// -------------------------------- DESTRUCTURING COM PARAMETROS DE INTERFACE ----------------------------------


interface User {
    id: number | string,
    nome: string,
    idade: number,
    email: string,
}

const user: User = {
    id: 8457,
    nome: "Teste",
    email: "teste@gmail.com",
    idade: 19,
}

const {nome} = user

// fazendo destructuring no objeto passando a interface como parametro
function DetalhesProdutoComDestructuring({nome, preco, tamanho, disponivel}: Produto):string {
    return `O produto ${nome} de tamanho ${tamanho} custa R$${preco} e` + (disponivel ? `` : ` não`) + ` está disponivel`
}

console.log(DetalhesProdutoComDestructuring(produto))