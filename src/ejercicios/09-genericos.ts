/*
    ===== Código de TypeScript =====
*/

// la viñeta <T> (generico) hace que el let o variables se declaren de un tipo dependiendo de lo que se coloque en los () del
// let para que funcione debe ser function "xxx" <T>(xxx:T)

function queTipoSoy<T>(argumento:T){
    return argumento;
}

let soyString =queTipoSoy('Hola Mundo');
let soyNumero =queTipoSoy(100);
let soyArreglo =queTipoSoy([1,2,3,4,5,6]);
let soyExplicito =queTipoSoy<number>(100);