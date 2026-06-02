/*


muitas funcoes podem nao ter um return
nesse caso é utilizado o void
indica ao TS que a funcao nao vai retornar nenhum valor
podem ser usadas em funcoes que alteram o DOM, já que normalmente nao retornam nada

sintaxe ↓
funcao nome (parametros): void {
    corpo da funcao
}


*/


function semRetorno(texto: string): void {
    console.log(texto)
}

semRetorno("Hello World")