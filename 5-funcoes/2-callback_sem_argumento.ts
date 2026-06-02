/*


é possível inserir uma funcao de callback como argumento de uma funcao
desse jeito é possível definir o tipo de argumento aceito pela funcao de callback e tambem o tipo de retorno


*/




// cria a função que sera passada como argumento
const greetingAF = (name: string): string => `Olá ${name}`

// funcao que executa a funcao que sera passada como argumento
// envia uma funcao como parametro de outra ↓
function preGreeting(f: (name: string) => string, username: string) {
    const greet = f(username) // usa a funcao passando como argumento o 2 argumento enviado nessa funcao
    console.log(greet)
}


preGreeting(greetingAF, "typescript")