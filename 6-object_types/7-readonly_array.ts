/*


ReadonlyArray é um tipo para arrays que deixa os itens dele como readonly
é possivel aplicar um tipo para os itens do array

é possivel fazer a modificacao dos itens do array
mas nao é possivel aumentar o tamanho dele


*/


// existem duas formas de criar um read-only array

// caso a tipagem do array seja por annotation, a sintaxe deve ser esta:
// modificador nome_array: readonly tipo_array[] = []
const fruits: readonly string[] = ["maca", "uva", "banana", "abacaxi", "morango", "laranja"]



// caso o array seja tipado por inferencia, a sintaxe é outra, como abaixo:
// modificador nome_array: ReadonlyArray<tipo_array> = []
const numeros: ReadonlyArray<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]




// fruits[1] = "tangerina" ← ERRO, nao pode ser alterado
// numeros.push(11) ← ERRO, nada pode ser adicionado






for (const fruit in fruits) {
    console.log(`Fruta ${fruit}: ${fruits[fruit]}`)
}


for (const fruit of fruits) {
    console.log(fruit)
}



const newNumbers: number[] = numeros.map((item) => item * 2)

console.log(newNumbers)