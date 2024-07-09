async function listarProductos() {
    const conexion = await fetch("http://localhost:3002/productos");
    const conexionConvertida = conexion.json();
    return conexionConvertida
}

async function enviarProductos(categoria,imagen,nombre,precio,descripcion) {
    const conexion = await fetch("http://localhost:3002/productos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            imagen: imagen,
            categoria: categoria,
            nombre: nombre,
            precio: precio,
            descripcion: descripcion,
        }),
    });
    const conexionConvertida = await conexion.json();
    if (!condition.ok) {
        throw new Error("Ha ocurrido un error")
    }
    return conexionConvertida;
}

async function buscarProductos(palabraClave) {
    const conexion = await fetch(`http://localhost:3002/productos?q=${palabraClave}`);
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

export const conexionAPI = {
    listarProductos,enviarProductos,buscarProductos
}

