
/*
    ===== Código de TypeScript =====
*/

let habilidades = ['Bash','Counter'];

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    villano?: string;
}

const personaje:Personaje ={
    nombre: 'Ivan',
    hp: 100,
    habilidades: ['Bash','Counter']

}

personaje.villano='Soy el malo';

console.table(personaje);