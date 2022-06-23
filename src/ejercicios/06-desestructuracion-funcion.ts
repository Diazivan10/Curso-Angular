
/*
    ===== Código de TypeScript =====
*/
 export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
 desc: 'Nokia A1',
 precio: 150
}
const tableta: Producto = {
    desc: 'Ipad Air',
    precio: 350
}
  export  function calculaimpuesto(productos: Producto[]):[number,number]{

        let total =0;

        productos.forEach(  (producto) => {
          total += producto.precio;
        })

        return [total,total *0.19];
    }
    const articulos= [ telefono, tableta];
    const [total,impuesto] = calculaimpuesto(articulos);

    console.log('Total : ', total);
    console.log('Impuesto', impuesto );

    