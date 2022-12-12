//Añadimos todos los eventos a los botones funcionales
//--- Boton para la derecha
let botonDer = document.getElementById("botonDerecho")
botonDer.addEventListener("click", lvlMas)

//Boton para la izquierda
let botonIzq = document.getElementById("botonIzquierdo")
botonIzq.addEventListener("click", lvlMenos)

//Boton de iniciar en la foto
let fotoIniciar = document.getElementById("imgLvl")
fotoIniciar.addEventListener("click", iniciarLvl)

//Nombre del nivel con el numero de cuadricula elevedado al cuadrado
const dificultadLvl = [{nombre: "Nivel Merluzo", cuadricula: 3}, {nombre: "Nivel Payaso", cuadricula: 5}, {nombre: "Nivel BlobFish", cuadricula: 7}];

//Ajustes para cuadno entres la primera vez o vuelves a esta página
let contadorLvl = 1;

//Cogemos las 3 bolitas ya que las vamos a usar, luego la primera bolita la ponemos en blanca
const lvl1 = document.getElementById('seleccionado').firstElementChild;
const lvl2 = document.getElementById('seleccionado').children[1];
const lvl3 = document.getElementById('seleccionado').lastElementChild;
lvl1.classList.add("elegido")

//Cogemos la imagen del primer lvl y la ponemos
const imgLvl = document.getElementById('imgLvl');
imgLvl.setAttribute("src", "img/lvl1.jpg")

//Cogemos el nombre del lvl y lo ponemos
const nombreLvl = document.getElementById('nombreLvl');
nombreLvl.innerHTML = dificultadLvl[0].nombre

//Este if es para que el boton de la izquiera se oculte ya que siempre aparecera en el index con el nivel facil (1)
if (contadorLvl == 1) {
    document.getElementById("botonIzquierdo").classList.add("disabled")
}


//Funcion pata cambiar el lvl hacia el lado de la izquierda
function lvlMenos() {
    contadorLvl = contadorLvl - 1
    if (contadorLvl == 1) {
        document.getElementById("botonIzquierdo").classList.add("disabled")
        lvl1.classList.add("elegido")      
        lvl2.classList.remove("elegido")
        nombreLvl.innerHTML = dificultadLvl[0].nombre
        imgLvl.setAttribute("src", "img/lvl1.jpg")

    } else if (contadorLvl == 2) {
        document.getElementById("botonDerecho").classList.remove("disabled")
        document.getElementById("botonIzquierdo").classList.remove("disabled")
        lvl2.classList.add("elegido")
        lvl3.classList.remove("elegido")
        nombreLvl.innerHTML = dificultadLvl[1].nombre
        imgLvl.setAttribute("src", "img/lvl2.jpg")
    }
}

//Funcion para cambiar el lvl hacia el lado de la derecha
function lvlMas() {
    contadorLvl = contadorLvl + 1
    if (contadorLvl == 3) {
        document.getElementById("botonDerecho").classList.add("disabled")
        lvl3.classList.add("elegido")      
        lvl2.classList.remove("elegido")
        nombreLvl.innerHTML = dificultadLvl[2].nombre
        imgLvl.setAttribute("src", "img/lvl3.jpg")

    } else if (contadorLvl == 2) {
        document.getElementById("botonDerecho").classList.remove("disabled")
        document.getElementById("botonIzquierdo").classList.remove("disabled")
        lvl2.classList.add("elegido")
        lvl1.classList.remove("elegido")
        nombreLvl.innerHTML = dificultadLvl[1].nombre
        imgLvl.setAttribute("src", "img/lvl2.jpg")
    }
}

//Esta funcion inicia el lvl que se a seleccionado
function iniciarLvl() {
    localStorage.setItem("dif", contadorLvl)

    const iniciar = document.getElementById("contenedor")
    iniciar.classList.add("cargarPartida")

    setTimeout(() => {
        document.body.classList.remove("mitadAzul")
        document.body.classList.add("azulEntero")
      }, 500)

    setTimeout(() => {
        window.open("lvl/lvl.html", "_self")
      }, 1600)
}
