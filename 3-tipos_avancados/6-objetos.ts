/*

objetos tambem podem ser tipados
para isso, a sintaxe é:

nome do objeto: {chave: tipo, chave2: tipo2} = {
    chave: valor,
    chave2: valor2
}

*/


const user: {email: string; idade: number} = {
    email: "teste@gmail.com",
    idade: 19
}



/*

os objetos de uma função tambem podem ser tipados

a sintaxe é: {prop: tipo}

determina quais propriedades serao recebidas na funcao

*/


function passCoordinates(coord: {x: number, y: number}): string {
    return `
        coordenada X: ${coord.x}
        coordenada Y: ${coord.y}
    `
}

console.log(passCoordinates({x: 89, y: 45}))
