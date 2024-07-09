import { tiposError, mensajes } from "./customError.js";
const campoDeFormularioLogin = document.querySelectorAll("[data-login]");
const formulario = document.querySelector("[data-formulario]");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const listaRespuestas = {
        email: e.target.elements["email"].value,
        password: e.target.elements["password"].value,
    }
    localStorage.setItem("registro", JSON.stringify(listaRespuestas))
    
    window.location.href = "/page/similares.html";
});

campoDeFormularioLogin.forEach((login) => {
    login.addEventListener("blur", () => verificarCampoLogin(login))
    login.addEventListener("invalid", (evento) => evento.preventDefault())

});

function verificarCampoLogin(login) {
    let mensajeLogin = "";
    login.setCustomValidity("");
    tiposError.forEach((errorLogin) => {
        if (login.validity[errorLogin]) {
            mensajeLogin = mensajes[login.name][errorLogin];
        }
    });
    const mensajeErrorLogin = login.parentNode.querySelector(".mensaje__error--login")
    const validarInputCheckLogin = login.checkValidity()
    if (!validarInputCheckLogin) {
        mensajeErrorLogin.textContent = mensajeLogin
    }
    else {
        mensajeErrorLogin.textContent = "";
    }
}