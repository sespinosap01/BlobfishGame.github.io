function eliminarIcono(elemento) {
    elemento.remove();
}

function insertarIcono() {

    const icono = document.createElement("div");

    icono.classList.add('burbuja');

    icono.innerHTML = '<img src="img/burbuja.png" alt="Burbuja" class="burbujaPX">';

    icono.style.left = Math.random() * 100 + "vw";

    icono.style.animationDuration = Math.random() * 2 + 3 + "s"; // 3s, 5s, 7s
    icono.style.zIndex = 2

    const contenedor = document.getElementById("contenedor");

    contenedor.appendChild(icono);

    setTimeout(eliminarIcono, 3300, icono);
}


setInterval(insertarIcono,500);