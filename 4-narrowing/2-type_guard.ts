/*


type guard é uma tecnica para validar dados usando typeof
a partir disso tem ramificações no codigo


*/

type aliasType = number | string

function soma(x:aliasType, y:aliasType):aliasType {
    if (typeof x === "string" && typeof y === "string") return Number(x) + Number(y)
    
    if (typeof x === "number" && typeof y === "number") return x + y
    
    return "Tipos inválidos"
}
console.log(soma("2", "2"))
console.log(soma(10, 10))
console.log(soma(10, "10"))