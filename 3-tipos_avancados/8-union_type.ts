/*

Union type é uma alternativa melhor do que o any
é possivel determinar mais de um tipo para um dado

sintaxe:
tipo | tipo2

*/

function printBalance(balance: string | number): void {
    console.log(`O saldo da conta é: R$ ${balance}`)
}

printBalance(1000)
printBalance("1000")


// ARRAYS DE MAIS DE UM TIPO

const mista: Array<number | string> = [1, 2, 3, 4, "abcd"]

const lista: (number | string)[] = [1, 2, 3, 4, 5, "abcd"]