/*


as propriedades readonly so podem ser acessadas uma vez, na criacao do novo dado
é uma constante em um objeto
faz com que a propriedade seja somente de leitura
podem ser adicionados as interfaces

sintaxe ↓
readonly nome_da_propriedade: tipo_da_propriedade


*/





interface User {
    nome: string
    readonly role: string
}


const user: User = {
    nome: "usuario",
    role: "comum"
}


console.log()

console.log(user.nome)
console.log(user.role)

console.log()

user.nome = "teste"
// user.role = "premium" ← ERRO de compilação, pois read-only property nao podem ser alteradas (apenas leitura)
console.log(user.nome)
