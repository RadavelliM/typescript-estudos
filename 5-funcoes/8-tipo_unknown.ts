/*


o tipo unknown representa um valor desconhecido
é semelhanete ao any, aceita qualquer tipo de dado
porem a diferenca e que nao deixa nada ser executado se nao ter validacao de tipo
funciona como trava de seguranca


*/




function teste (x: unknown) {
    if (Array.isArray(x)) return x[0]
    return x
}

console.log(teste(1));
console.log(teste(true));
console.log(teste([1, 2, 3, 4, 5]));
