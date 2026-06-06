/*


tupla é semelhante a um array, mas é definido a quantidade de e o tipo de elementos
determina o tipo de CADA valor da posicao de um array

*/






type numerosType = [number, number, number, number, number]


const numeros: numerosType = [1, 2, 3, 4, 5]

// const numeros: numerosType = [1, 2, 3, 4, "5"] ← ERRO, pois nao possui string no type numeros
// const numeros: numerosType = [1, 2, 3, 4, 5, 6] ← ERRO, mais valores do que os declarados no type








// tuplas nao declaradas com readonly podem ter seus valores alterados (desde que seja o mesmo tipo)

type fruitsType = [string, string, string, string, string]
const fruits: fruitsType = ["maca", "uva", "banana", "abacaxi", "morango"]

fruits[0] = "pera"
fruits.splice(4, 1)

console.log(fruits)

