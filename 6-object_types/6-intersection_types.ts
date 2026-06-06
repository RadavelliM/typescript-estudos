/*


intersection types sao utilizados para criar tipos mais complexos a partir de duas interfaces
os tipos sao concatenados usando &


*/




interface Personagem {
    nome: string,
}


interface Missao {
    missao: string
}



// juncao dois 2 tipos  ↓
type Quest = Personagem & Missao



const quest: Quest = {
    nome: "link",
    missao: "kokiri forest"
}