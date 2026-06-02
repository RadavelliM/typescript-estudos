/*


o tipo never é semelhante ao tipo void

void nao retorna nada, mas executa algo
o never é uma parada do sistema

retorno de erros


*/




function errorMessage(errorMsg: string): never {
    throw new Error(errorMsg)
}

console.log(errorMessage("Algum erro foi detectado"))