/*

é possivel especificar um array
ter tipos primitivos dentro do array

*/

/*

para criar o array:
const/let nome: tipo[] = [];

colocar os colchetes depois do tipo da variavel

*/

const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.push(11);
// numeros.push(true); ERRO -> true é booleano

let numeros2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros2 = [1, 2, 3, 4];
// numeros2 = ["texto"]; ERRO





const outrosTipos: (string | number)[] = [1, 2, 3, 4, "aiosdaois"];
// permite adicionar mais de um tipo para o array





// outra sintaxe para arrays (mais antiga)
const outrosNumeros: Array<number> = [1, 2, 3, 4, 5];
const outrosNumeros2: Array<number | string> = [1, 2, 3, 4, 5, "texto"];

