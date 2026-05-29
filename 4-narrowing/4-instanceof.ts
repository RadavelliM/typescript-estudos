/*


checa se um dado pertence a uma determinada classe
serve tambem para as proprias classes desenvolvidas


*/




class User {
    nome
    constructor(nome:string) {
        this.nome = nome
    }
}

class SuperUser extends User {
    constructor(nome: string) {
        super(nome)
    }
}

const u1 = new User("john")
const u2 = new SuperUser("paul")


function Greeting(user: object) {
    if (user instanceof SuperUser) console.log("usuario premium")
    else if (user instanceof User) console.log("usuario comum")
}


Greeting(u1)
Greeting(u2)