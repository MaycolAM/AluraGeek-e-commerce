// import { id } from "./conexionAPI.js";
function mostrarOcultar() {
    let buscador = document.getElementById("buscador");
    buscador.classList.toggle("otro__buscador");
}
// function borrarProducto() {
//     let buscador = document.getElementById("borrar");
//     buscador.classList.toggle("quitar__producto");
// }

// function borrarProducto() {

//     let borrar = document.querySelector(`[data-${id}]`);
//     borrar.classList.toggle("quitar__producto");
// }
// borrarProducto()
// reusar codigo de css para lo demas 
// const user = {
//     name: "Ryan",
//     lastname: "Ray",
//     age: 20,
//     nickname: "ryan321",
// }


// const friends = [
//     {name:"joe",nickname:"joe123"},
//     {name:"marcos",nickname:"marcos123"},
//     {name:"juan",nickname:"juan123"},
//     {name:"jose",nickname:"jose123"},
// ]
// user.friends = friends;

// let output = '';

// for (let i = 0; i < friends.length; i++) {
//     output = output + `<li>${friends[i].name}-${friends[i].nickname}</li>`
// }

// fetch('/src/sample.json')
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('people').innerHTML = `<h1>${data.url}</h1>`
// })

// let postsElements = '';

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => {
//     return response.json()
//     })
// .then(data => {
//     for (let i = 0; i < data.length; i++) {
//         postsElements += `<li>${data[1].title}</li>
//         <img src="${data[1].url}">`
//     }
//         document.getElementById('posts').innerHTML=postsElements
// })