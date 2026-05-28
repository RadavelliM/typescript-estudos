/*

é possível utilizar condicionais para validar um tipo no union type
checagem utilizando o typeof

*/

function userRole (role: boolean | string): string {
    if (typeof role === "boolean") {
        return "Usuario não aprovado"
    }

    return role
}

console.log(userRole(true))
console.log(userRole("true"))



const userRole2 = (role: boolean | string): string => typeof role === "boolean" ? "negado" : "permitido"

console.log(userRole2(true))
console.log(userRole2("true"))