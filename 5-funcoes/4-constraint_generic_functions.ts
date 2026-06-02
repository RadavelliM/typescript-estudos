/*


generic functions podem ter o escopo reduzido por constraints (restrições)
limita os tipos de dados que podem ser usados dentro do generic, deixando o escopo menos abrangente


*/

// determina os tipos que o generic aceita ↓
const maiorNumero = <T extends number | string> (a: T, b: T): T => a > b ? a : b

console.log(maiorNumero(10, 9))


// se o generic é o mesmo, precisa ser o mesmo tipo de dado
function MAIORNUMERO <T extends number | string> (a: T, b: T): T {
    let maior: T;

    if (a > b) maior = a
    else maior = b

    return maior
}

console.log(MAIORNUMERO(10, 20))









// generics diferentes, argumentos de tipos de dados diferentes
function maironumero <T extends number | string, U extends number | string> (a: T, b: U) {

}

console.log(maironumero("10", 20))
