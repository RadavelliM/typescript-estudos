/*


as vezes o TS pode identificar um erro em um valor que no momento do codigo ainda nao esta disponivel
porem se o valor for preenchido no futuro, é possível contornar esse erro

utiliza-se o operador !


*/




const p = document.querySelector('#some-p')!.innerHTML = "teste"