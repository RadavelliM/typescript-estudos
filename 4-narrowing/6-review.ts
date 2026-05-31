interface Notas {
    1: string,
    2: string,
    3: string,
    4: string,
    5: string
}

const notas: Notas = {
    1: "Péssimo",
    2: "Ruim",
    3: "Mediano",
    4: "Bom",
    5: "Excelente",
}

type notasDisponiveis = 1 | 2 | 3 | 4 | 5 | boolean




// funções ↓


const userReview = (nota: number | boolean): string => nota ? notas[nota as keyof typeof notas] : "Usuario nao avaliou o produto"

console.log(userReview(99999999)) // aceita qualquer valor pois nao esta definido





const userReviewAliasTyped = (nota: notasDisponiveis): string => nota ? notas[nota as keyof typeof notas] : "Usuario nao avaliou o produto"

console.log(userReviewAliasTyped(1)) // aceita apenas valores definidos no type notasDisponiveis = 1 | 2 | 3 | 4 | 5
// console.log(userReviewAliasTyped(99)) → ERRO pois 99 esta fora dos valores definidos aqui ↑
// gera erro antes de compilar ↑




// versão maior
const userReviewAliasTypedBigger = (nota: notasDisponiveis): string => {
    if (!nota) return "Usuário não avaliou o produto"
    return notas[nota as keyof typeof notas]
}