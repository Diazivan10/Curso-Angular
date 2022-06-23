
/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {

    return a + b;
}
const sumarflecha = (a: number, b: number): number => {
    return a + b;
}
// primero van los datos obligatorios y luego el opcional

// se puede colocar los datos en desorden siempre y cuando especifiquen de que tipo son

//en base:number=3 cuando en la const multiplicar no tenga base toma el valor que esta en function
function multiplicar(numero: number, otronumero?: number, base: number = 3): number {
    return numero * base;
}
/*
 const resultado = multiplicar(2,5,4) ;

 console.log(resultado);
 */

 interface personajeLOR{
     nombre: string;
     pv: number;
     mostrarpv: () => void;
 }
function curar(personaje:personajeLOR,curar:number) {

personaje.pv += curar;

console.log(personaje);
}

const nuevopersonaje :personajeLOR={
    nombre: 'Ivan',
    pv:50,
    mostrarpv(){
        console.log('Puntos de vida mostrarpv:', this.pv);
    }
    
}
curar(nuevopersonaje,20);

nuevopersonaje.mostrarpv();