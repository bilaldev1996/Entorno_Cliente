let json = {
    idPedido: "faa-8444",
    pedidos: [
    {
        idProducto: "info005",
        nombre: "Placa_Arduino_one",
        destinoPostal: "abarcable",
    },
    {
        idProducto: "info041",
        nombre: "Placa_Raspberry_3",
        destinoPostal: "No abarcable",
    },
    {
        idProducto: "gadget024",
        nombre: "usb_Multi_5puertos",
        destinoPostal: "abarcable",
    },
    ],
};

let map = new Map(Object.entries(json)); // devuelve un objeto map con los datos -> [key, value]

const tabla = ()=>{
    let html = `<table border='1'>`;
    html+= `<tr>
                <th>idProducto</th>
                <th>nombre</th>
                <th>destinoPostal</th>
                `
                if(map.get('idPedido')){ // si existe el idPedido lo muestra
                    html+=`<th>idPedido</th>`
                }
                `
                
    </tr>`
    for (let [key, value] of map) {
        if(typeof value === 'object'){ //Recorremos el array de pedidos
            for(let [index, value2] of Object.entries(value)){
                html += `<tr><td>${value2.idProducto}</td><td>${value2.nombre}</td><td>${value2.destinoPostal}</td><td></td></tr>`; //mostramos el contenido de los productos
            }
        }else{
            // mostrar el contenido del idPedido
            html += `<tr><td></td><td></td><td></td><td>${value}</td></tr>`;
        }
    }

    html += `</table>`;
    document.write(html);
    return html;
}

tabla();

console.log(map);
