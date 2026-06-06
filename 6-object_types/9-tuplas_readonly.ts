/*


tuplas com readonly sao semelhantes as tuplas do python
limita quantos dados sao colocados, quais os tipos deles, e nao podem ser adicionados, alterados ou excluidos


*/





type numerosType = readonly [number, number]
const numeros: numerosType = [1, 2]


// numeros[0] = 2 ← ERRO, pois não é possível alocar um valor para uma tupla readonly