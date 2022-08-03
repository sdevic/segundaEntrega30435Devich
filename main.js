
//Creo las variables para poder guardar los datos de carga
let cliente;
let producto;
let precio;
const titulo = document.querySelector('#titulo');
let facturas = [];

//Creo un constructor para poder guardar mis facturas en un objeto
class Factura{
    constructor(cliente, producto, precio){
        this.cliente = cliente;
        this.producto = producto;
        this.precio = precio;
    }
}

//Creo una funcion para cargar la factura y la guardo en el storage dentro de un array

function cargarFactura(){
    titulo.textContent =" Nueva factura";
    btn.textContent = "Cargar factura";
    const factura = document.querySelector('#cargaFactura');
    
      
    factura.addEventListener("submit",(e) =>{
        e.preventDefault();
        cliente =  clientes.value;
        producto = productos.value;
        precio = valor.value;
        let nFactura = new Factura(cliente, producto, precio);
        facturas.push(nFactura);
        localStorage.setItem("facturas", JSON.stringify(facturas));
       
        mostrarFacturaCargada();
        
        

        
    })
}
//muesra la factura cargada y un boton de vuelta al inicio
function desActivarInput(){
    
    document.getElementById('clientes').disabled = true;
    document.getElementById('productos').disabled = true;
    document.getElementById('valor').disabled = true;
    
}
//activa el input y vuelve a la carga de facturas
function activarInput(){
    
    document.getElementById('clientes').disabled = false;
    document.getElementById('productos').disabled = false;
    document.getElementById('valor').disabled = false;
    btn.textContent = "Cargar factura";
    cargarFactura();
    
}
//muestra la factura cargada una vez apretado el boton y sin poder editar, lo queria enviar directo a la funcion de cargar factura, pero no se por que me lo duplicaba asi que lo mande a la funcionde activar el input y de ahi a cargar
function mostrarFacturaCargada(){
    desActivarInput();
    titulo.textContent =" Factura generada";
    const btn = document.querySelector('#btn').textContent="Cargar una nueva";
    const volverFactura = document.querySelector('#cargaFactura');
    volverFactura.addEventListener("submit",(e) =>{
        e.preventDefault();
        
        activarInput();
        

    })
}
cargarFactura();