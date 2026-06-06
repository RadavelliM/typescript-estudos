/*


extending types sao utilizados como heranca para criar tipos mais complexos atraves de um interface
uma interface pode herdar tipos e propriedades de outra interface ja definida


*/





interface User {
    nome: string,
    idade: number
}


interface SuperUser extends User {
    role: string,
    email: string
}




const user: SuperUser = {
    nome: "usuario",
    idade: 22,
    email: "teste@gmail.com",
    role: "admin"
}