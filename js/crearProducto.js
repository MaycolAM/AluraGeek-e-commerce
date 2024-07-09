import { conexionAPI } from "/js/conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProductos(evento) {

    evento.preventDefault();

    const categoria = document.querySelector("[data-categoria]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    try {
        await conexionAPI.enviarProductos(categoria, imagen, nombre, precio, descripcion);
        window.location.href = "/page/similares.html";
    } catch {
        alert(e)
    }
}
formulario.addEventListener("submit", evento => crearProductos(evento));