// Juego el Amigo Secreto desarrollado por Manuel MOntealegre

// Variales Globales  {}
let arregloAmigos = [];

function agregarAmigo() {
    // Variables de la funcion
    let amigoDigitado = document.getElementById("amigo");
    let nombreAmigo = amigoDigitado.value;
    
    // Validar que se haya ingresado un nombre 
    if (!nombreAmigo || nombreAmigo[0] == " ") {
        alert("Debe ingresar un nombre que comience con una letra");
        return;
    }
    arregloAmigos.push(nombreAmigo);
    amigoDigitado.value = "";
    amigoDigitado.focus();
    renderizarAmigos();

}

function renderizarAmigos() {
    // Limpiar Lista de amigos
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    // Desplegar Lista Amigos
    for (let i = 0; i < arregloAmigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = arregloAmigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    // Validar si se han ingresado amigos
    if (arregloAmigos.length == 0) {
        alert("No hay amigos para sortear");
        return;
    }
    // 
    let amigoSecreto = arregloAmigos[Math.floor(Math.random() * arregloAmigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
}
