// FUNCAO ANONIMA

setTimeout(function() {

    const sallary: number = 1000

    // console.log(parseFloat(sallary)) ERRO, mas o TS identifica antes

}, 2000)



// FUNCTION EXPRESSION

const multiplicacao = function(a: number, b: number): number {
    return a * b;
}

console.log(multiplicacao(10, 10))




// ARROW FUNCTIONS


const fullName = (firstName: string, lastName: string):string => firstName + lastName
console.log(fullName("Type", "Script"));




// IIFE
((a: number, b: number):number => {return a + b})(2, 2)