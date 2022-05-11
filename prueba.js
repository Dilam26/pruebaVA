function serpiente(ancho, alto) {

    let posicion = 0;
    //Bonus 3 - recibo como parametro las dimensiones del tablero
    let fin = ancho * alto
    let dado
    let prevPos = 0

    while (posicion < fin) {
        dado = getRandomNumber(1, 6)
        console.log("Dado arroja " + dado);
        prevPos = posicion
        posicion += dado;

        //Bonus 1
        if (posicion < fin) {
            console.log("Jugador avanza a cuadro " + posicion)
        } else if (posicion == fin) {
            console.log("fin");
        } else {
            posicion = prevPos
            console.log("Jugador supera la casilla " + fin + " debe retroceder a la posicion " + posicion);
        }

        switch (posicion) {
            case 3:
                posicion = 11
                console.log("Jugador sube por escalera al cuadro " + posicion);
                break;
            case 6:
                posicion = 17
                console.log("Jugador sube por escalera al cuadro " + posicion);
                break
            case 10:
                posicion = 12
                console.log("Jugador sube por escalera al cuadro " + posicion);
                break
            case 14:
                posicion = 4
                console.log("Jugador desciende al cuadro " + posicion);
                break
            case 19:
                posicion = 8
                console.log("Jugador desciende al cuadro " + posicion);
                break
            case 22:
                posicion = 20
                console.log("Jugador desciende al cuadro " + posicion);
                break
            case 24:
                posicion = 16
                console.log("Jugador desciende al cuadro " + posicion);
                break
        }
    }

}

//Sacado de Google
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

serpiente(5, 5)