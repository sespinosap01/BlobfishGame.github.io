function generarCuadricula() {
    
    const contenedorCuadricula = document.getElementById("contenedorCuadricula")

    for (let i = 0; i < 1; i++) {
        let fila = document.createElement("span")
        fila.classList.add("fila")

        for (let x = 0; i < 7; x++) {
            let cuadrado = document.createElement("span")
            cuadrado.classList.add("cuadrado")
            fila.appendChild(cuadrado)
        }

        contenedorCuadricula.appendChild(fila)
    }
}