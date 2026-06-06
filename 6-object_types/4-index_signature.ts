/*


o index signature é utilizado quando nao se sabe o nome das chaves, porem ja se sabe o tipo de um objeto/array
isso cria restricao a tipos que nao devem ser utilizados


*/




// interface Coor {

//     [index: string] ← significa que a chave do objeto é do tipo string
//     [index: string]: number
// }



interface Coords {
    [index: string]: number
}


const coords: Coords = {
    // x: "12" ← nao é possivel passar string para number
    x: 12,
}







coords.y = 15
// coords.z = "teste" ← ERRO de compilacao