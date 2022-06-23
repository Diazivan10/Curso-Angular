
/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
 volumen: number;
 segundo: number;
 cancion: string;
 detalle: Detalles;
 
}

interface Detalles {
 autor: string;
 anio: number;
}

const reproductor: Reproductor={
   volumen : 90,
   segundo : 36,
   cancion : ' Vivir mi vida ',
   detalle : {
       autor: 'Ivan Ricardo Diaz',
       anio : 2020,
   }
    
}
// para desestructurar el "detalle se colocan las variables dentro de otras llave {}"
const{ volumen,segundo,cancion,detalle:{autor}} = reproductor;

 console.log( ' el volumen actual es de : ' , volumen)
 console.log( ' el segundo actual es de : ' , segundo)
 console.log( ' La cancion  actual es de : ' , cancion)
 console.log( ' el autor actual es de : ' ,autor)

 const dbz: string[]=['Goku', 'Vegeta' , 'Gohan'];
 const [g,v,go ] =dbz;
 
 console.log('Personaje 1:', );
 console.log('Personaje 2:', );
 console.log('Personaje 3:',go );