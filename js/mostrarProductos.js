import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

export default function crearCard(imagen,nombre,precio,id) {
    const productos = document.createElement("li");
    productos.className = "productos";
    productos.innerHTML = `<div class="productos__productos" >
        <img class="productos__img" src="${imagen}" alt="producto">
        <img class="productos__basurero" src="/assets/basurero.png" alt="basurero">
        <img class="productos__lapiz" src="/assets/lapiz.png" alt="lapiz">
    </div>
    <h3 class="productos__nombre" >${nombre}</h3>
    <p class="productos__precio">$ ${precio}</p>
    <a class="productos__a" href="#">#${id}</a>
    `;
    return productos;
}

async function listarProductos() {
    try {
        const listaAPI = await conexionAPI.listarProductos()

        listaAPI.forEach(productos => lista.appendChild(crearCard(productos.imagen, productos.nombre, productos.precio,productos.id)));

    } catch {
        lista.innerHTML = '<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexion :( </h2>';
    }
}
listarProductos()