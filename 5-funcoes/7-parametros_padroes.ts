/*


parametros default ou parametros padrao, ja possuem um valor pre definido
caso um valor nao seja enviado para o parametro, o valor padrao é utilizado

precisam obrigatoriamente estar no fim da lista de parametros

*/




// quando se usa o parametro default, nao é necessario utilizar ? para indicar opcional
function soma(x: number, y: number = 10): number {
    return x + y
}

console.log(soma(10))
console.log(soma(10, 10))