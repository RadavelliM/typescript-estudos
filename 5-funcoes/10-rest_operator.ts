/*


definir o tipo de dado e usar ...


*/


function soma(...x: number[]): number {
    return x.reduce((acc, val) => acc + val)
}

console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))