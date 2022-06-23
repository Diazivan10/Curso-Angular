/*
    ===== Código de TypeScript =====
*/

class PersonaNormal{
 
    constructor( 
        public nombre:string,
        public direccion:string
        ){}
}


class Heroe  extends PersonaNormal{
    // private :  va a poder ser visible dentro de la clase
      //alterEgo: string;
    // public : afuera de la clase se va a poder ver 
     //edad: number;
    // static : acceder al valor de la propiedad sin crear una instancia de la clase
     //nombreReal: number;

     // constructor: una funcion que se llama cuando crea una instancia de la clase 
     // los parentesis de new heroe () van a llamar efectivamente lo que hay en constructor
    // cuando no se definen variables para usar en la clase se puede hacer en el constructor 
     constructor ( 
         public alterEgo:string,
         public edad: number, 
         public nombreReal:string)
         {
             super(nombreReal,'Bucaramanga');
         }
}

const ironman = new Heroe('Ironman',45,'Tony');
console.log(ironman);
