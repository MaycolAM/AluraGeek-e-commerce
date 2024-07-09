import { tiposError, mensajes } from "./customError.js";

const campoDeFormularioAgregar = document.querySelectorAll("[data-agregar]");
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const listaRespuestas = {
        categoria: e.target.elements["categoria"].value,
        imagen: e.target.elements["imagen"].value,
        nombre: e.target.elements["nombre"].value,
        precio: e.target.elements["precio"].value,
        descripcion: e.target.elements["descripcion"].value,
    }
    localStorage.setItem("registro", JSON.stringify(listaRespuestas))
    
    window.location.href = "/page/similares.html";
});

campoDeFormularioAgregar.forEach((agregar) => {
    agregar.addEventListener("blur", () => verificarCampoAgregar(agregar))
    agregar.addEventListener("invalid", (evento) => evento.preventDefault())

});

function verificarCampoAgregar(agregar) {
    let mensajeAgregar = "";
    agregar.setCustomValidity("");
    tiposError.forEach((errorAgregar) => {
        if (agregar.validity[errorAgregar]) {
            mensajeAgregar = mensajes[agregar.name][errorAgregar];
        }
    });
    const mensajeErrorAgregar = agregar.parentNode.querySelector(".mensaje__error--agregar")
    const validarInputCheckAgregar = agregar.checkValidity();
    if (!validarInputCheckAgregar) {
        mensajeErrorAgregar.textContent = mensajeAgregar;
    }
    else {
        mensajeErrorAgregar.textContent = "";
    }
}