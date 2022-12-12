let contadorAciertos = 0;
let casillasAIluminar = []
let casillasAIluminarSinRepetir
let lvl = localStorage.getItem("dif")
let cuadricula;

if (lvl == 1) {
    cuadricula = 3
} else if (lvl == 2) {
    cuadricula = 5
} else if (lvl == 3) {
    cuadricula = 7
}

function generarCuadricula(numCuadricula) {   
    let contadorIdCasilla = 1;
    const contenedorCuadricula = document.getElementById("contenedorCuadricula")

    for (let i = 0; i < numCuadricula; i++) {
        let fila = document.createElement("span")
        fila.classList.add("fila")

        for (let x = 0; x < numCuadricula; x++) {
            let cuadrado = document.createElement("span")
            cuadrado.classList.add("cuadrado")
            cuadrado.id = "CA" + contadorIdCasilla
            let num = 0 + contadorIdCasilla
            cuadrado.addEventListener("click", function(){comprobarCasillas(num)}, false)
            fila.appendChild(cuadrado)
            contadorIdCasilla++
        }

        contenedorCuadricula.appendChild(fila)
    }
}
generarCuadricula(cuadricula)




function elegirCasillas() {

    let numCuadricula
    let numRestar

    if (lvl == 1) {
        numCuadricula = 8;
        numRestar = 4
    } else if (lvl == 2) {
        numCuadricula = 24;
        numRestar = 17
    } else if (lvl == 3) {
        numCuadricula = 48;
        numRestar = 38
    }

    for (let i = 0; i < numCuadricula - numRestar; i++) {
        let numRandom = Math.floor(Math.random() * numCuadricula + 1);
        casillasAIluminar.push(numRandom)
    }
}
elegirCasillas()


function iluminarCasillas() {

    for (let i = 0; i < casillasAIluminar.length; i++) {
        let idCasilla = "CA" + casillasAIluminar[i]
        let casilla = document.getElementById(idCasilla)
        casilla.classList.remove("cuadrado")
        casilla.classList.add("iluminar")        
    }
}

function desIluminarCasillas() {

    for (let i = 0; i < casillasAIluminar.length; i++) {
        let idCasilla = "CA" + casillasAIluminar[i]
        let casilla = document.getElementById(idCasilla)
        casilla.classList.add("cuadrado")
        casilla.classList.remove("iluminar")        
    }
}


function empezarRonda() {
    elegirCasillas();
    setTimeout(iluminarCasillas, 500)
    setTimeout(desIluminarCasillas, 6500)

    casillasAIluminarSinRepetir = [... new Set(casillasAIluminar)]   
}
empezarRonda()


let vidas = 2
let aciertos = 0

function comprobarCasillas(idCasilla) {
    let acierta = false

    for (let i = 0; i < casillasAIluminar.length; i++) {
        if (idCasilla === casillasAIluminar[i]) {
            acierta = true;
        }
    }

    let cambiarCasilla = document.getElementById("CA" + idCasilla)

    if (acierta) {
        cambiarCasilla.style.backgroundColor = "green"
        aciertos++

        if (aciertos == casillasAIluminarSinRepetir.length) {
            window.open("../lvl/finalPags/winner.html", "_self")
        }

    } else {
        cambiarCasilla.style.backgroundColor = "red"

        if (vidas == 0) {
            window.open("../lvl/finalPags/loser.html", "_self")
        }

        vidas--
        
        let vidasMostrar = document.getElementById("vidas")
        vidasMostrar.innerHTML = "Intentos: " + vidas
    }
}
