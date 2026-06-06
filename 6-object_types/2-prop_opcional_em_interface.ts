/*


as interfaces podem conter propriedades opcionais
para isso, basta adicionar o ponto de interrogação na propriedade desejada


*/



interface Produto {
    id: number | string,
    nome: string,
    disponivel: boolean,
    quantidade: number

    tamanho?: number | string,
}

const produto: Produto = {
    id: 8475,
    nome: "calca",
    disponivel: true,
    quantidade: 22
}




function detalhesProduto({id, nome, quantidade, disponivel, tamanho}: Produto) {
    return `
        id: ${id}
        nome: ${nome}
        quantidade: ${quantidade}
        disponivel: ${disponivel}
    ` +
    (tamanho ? tamanho : "")

}


console.log(detalhesProduto(produto))