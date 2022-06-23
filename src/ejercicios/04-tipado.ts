
/*
    ===== Código de TypeScript =====
*/

interface superheroe {
    nombre: string;
    edad : number;
    /* solo se pone en el objeto el tipo de la interface o el nombre cuando hay error pero esto no marca error 
    por la actualizacion de angular */
    direccion: Direccion;

    /* cuando los objetos son de tipo anidado se puede crear como esta aca o creando otra interface 
    direccion : {
        calle: string;
        pais: string;
        ciudad: string;
    } */
    mostrardireccion: ()=> string;
}

interface Direccion{
        calle: string;
        pais: string;
        ciudad: string;
}

const superheroe = {
nombre: 'spiderman',
edad : 30,
direccion: {
    calle: 'wall street',
    pais: 'Colombia',
    ciudad: 'Bucaramanchester'
},

mostrardireccion() {
    return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
}

}

const direccion = superheroe.mostrardireccion();
console.log(direccion);