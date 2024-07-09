import { tiposError, mensajes } from "./customError.js";

const campoDeFormulario = document.querySelectorAll("[data-required]");

campoDeFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo))
    campo.addEventListener("invalid", (evento) => evento.preventDefault())

});

function verificarCampo(campo) {
    let mensaje = "";
    campo.setCustomValidity("");
    tiposError.forEach((error) => {
        if (campo.validity[error]) {
            mensaje = mensajes[campo.name][error];
        }
    });
    const mensajeError = campo.parentNode.querySelector(".mensaje__error")
    const validarInputCheck = campo.checkValidity()
    if (!validarInputCheck) {
        mensajeError.textContent = mensaje;
    }
    else {
        mensajeError.textContent = "";
    }
}
