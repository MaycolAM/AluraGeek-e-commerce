import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarProductos.js";

async function filtrarProductos(evento) {
    evento.preventDefault();

    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await conexionAPI.buscarProductos(datosDeBusqueda);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busqueda.forEach(productos => lista.appendChild(crearCard(productos.imagen, productos.nombre, productos.precio,productos.id)));

    if (busqueda.length == 0) {
        lista.innerHTML=`<h2 class="mensaje__titulo">No fueron encontrados elementos para ${datosDeBusqueda}</h2> `
    }
}

const boton = document.querySelector("[data-boton-busqueda]");

boton.addEventListener("click", evento => filtrarProductos(evento));