/*


o operador in é usado para verificar se existe alguma propriedade no objeto
recurso interessante pois propriedades podem opcionais


*/


class Cachorro {
    nome
    raca

    constructor(nome: string, raca?: string) {
        this.nome = nome
        if (raca) this.raca = raca
    }


}


const temRaca = new Cachorro("Luna", "Pastora alemã")
const semRaca = new Cachorro("Kiko")



// recebe a classe inteira como parametro ↓

// ** OBRIGATORIAMENTE TEM QUE SER COM ASPAS SIMPLES ' ' **
function detalhesCachorro(cachorro: Cachorro): string {
    if ('raca' in cachorro) return `o cachorro é da raca: ${cachorro.raca}`
    return `o cachorro nao tem raca`
}

console.log(detalhesCachorro(temRaca))
console.log(detalhesCachorro(semRaca))