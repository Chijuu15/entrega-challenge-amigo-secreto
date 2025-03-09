// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim(); // Elimina espacios en blanco

    if (!nombreAmigo) {
        alert("Debes ingresar un nombre");
        return;
    }

    if (amigo.includes(nombreAmigo)) {  // Verifica si el nombre ya está en la lista
        alert("Este nombre ya ha sido ingresado");
        return;
    }

    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    
    renderizarAmigos(); // Actualiza la lista en pantalla
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigo.length === 0) {
        alert("No has ingresado nombres de amigos para sortear");
        return;
    }

    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    // Vacia la lista visual y el array de amigos
    amigo.length = 0;
    renderizarAmigos();
}
