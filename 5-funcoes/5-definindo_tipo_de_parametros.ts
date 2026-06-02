/*


ao utilizar generic funtions, deve-se utilizar parametros com tipos semelhantes para nao ocasionar erros
porem existe como determinar o tipo dos parametros, fazendo com que o TS aceite os tipos escolhidos


*/





function juntarArrays <T> (a: T[], b: T[]): T[] {
    return a.concat(b)
}



console.log(juntarArrays([1, 2, 3, 4, 5], [1234])) // aceita normalmente pois sao 2 numbers

// console.log(juntarArrays([1, 2, 3, 4, 5], ["texto"])) ERRO pois nao é possivel juntar os dois

// para contornar isso, é colocado um generics antes dos parametros
console.log(juntarArrays <number | string> ([1, 2, 3, 4, 5], ["texto"]))