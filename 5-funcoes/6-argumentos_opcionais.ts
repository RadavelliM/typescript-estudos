/*


nem sempre todos os parametros de uma funcao é utilizado
mas se for opcional, é possivel declarar isso para o ts


*/




const modernGreeting = (name: string, prefix?: string): string => prefix ? `Olá ${prefix} ${name}` : `Olá ${name}`

console.log(modernGreeting("Typescript"))
console.log(modernGreeting("Typescript", "Sr"))






