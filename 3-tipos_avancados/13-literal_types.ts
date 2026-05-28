/*

literal types permite colocar valores como tipos. isso restringe o uso a nao so tipos, como tambem os proprios valores
muito utilizado com union types

let variavel: valor

*/




let teste: "valor"
teste = "valor"




function conta(operacao: "soma" | "menos" | "multiplicacao" | "divisao") {
    console.log(`A operação selecionada foi ${operacao}`)
}

conta("divisao")
// conta("exponenciacao") ERRO: nao disponivel nos argumentos de literal types