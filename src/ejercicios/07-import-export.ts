/*
    ===== Código de TypeScript =====
*/

 import { calculaimpuesto, Producto } from "./06-desestructuracion-funcion";

    const carritoCompras: Producto[]= [
        {
            desc: 'Telefono 1',
            precio: 100
        },
        {
            desc: 'Telefono 2',
            precio: 150
        },
    ];

    const [total, impuesto] = calculaimpuesto(carritoCompras);

    console.log ('Total',total);
    console.log('impuesto :',impuesto)