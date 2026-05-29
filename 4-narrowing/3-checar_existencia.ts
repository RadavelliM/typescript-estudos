/*


narrowing em if e else


*/




function math (nums: number[], operation: string | undefined): string | number {
    let a: number = 0;
    
    if (!operation) return "Envie uma operacao"
    
    if (operation.toLowerCase() === "adicao") a = nums.reduce((acc, total) => acc + total);
    if (operation.toLowerCase() === "subtracao") a = nums.reduce((acc, total) => acc - total);
    if (operation.toLowerCase() === "divisao") a = nums.reduce((acc, total) => acc / total);
    if (operation.toLowerCase() === "multiplicacao") a = nums.reduce((acc, total) => acc * total);
    

    return a;
}

console.log(math([1, 2, 3, 4], "multiplicacao"))




// utilizando o operador keyof
// ele pega as chaves da interface

interface Operations {
    adicao: number,
    subtracao: number,
    divisao: number,
    multiplicacao: number
}


// aqui, o keyof pega as keys da interface e usa como parametro
// aumentando legebilidade e escalabilidade           ↓
function mathOperations (nums: number[], operation: keyof Operations)  {

    const obj: Operations = {
        adicao: nums.reduce((acc, total) => acc + total),
        subtracao: nums.reduce((acc, total) => acc - total),
        divisao: nums.reduce((acc, total) => acc / total),
        multiplicacao: nums.reduce((acc, total) => acc * total)
    }
    
    return obj[operation]
}

console.log(mathOperations([1, 2, 3, 4], "multiplicacao"))
