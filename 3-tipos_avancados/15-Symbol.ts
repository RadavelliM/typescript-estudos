/*


Symbol: cria uma referencia unica para um valor
isso significa que mesmo duas variaveis com o mesmo valor, sao consideradas diferentes


*/

const symbolA:symbol = Symbol("abcd")
const symbolB:symbol = Symbol(1234)

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)