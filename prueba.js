function serpiente(ancho, alto) {

    let posicion = 0;
    //Bonus 3 - recibo como parametro las dimensiones del tablero
    let fin = ancho * alto
    let dado
    let prevPos = 0
        //Array de objetos con las posiciones especiales
    let posEspe = []

    //Adicion de escaleras y Serpientes
    if (fin > 25) {
        let interval = Math.round((fin - 25) / 2)
        let start = getRandomNumber(25, fin - 5);
        //Array de posiciones disponibles
        let arrPosDispo = new Array(interval);
        for (let i = 0; i < interval; i++) {
            arrPosDispo[i] = start + 1;
            start++
        }

        arrPosDispo.sort(() => Math.random() > 0.5 ? 1 : -1)
        var posE1;
        var posE2

        while (arrPosDispo.length > 2) {
            let pos = getRandomNumber(0, arrPosDispo.length)
            posE1 = arrPosDispo[pos]
            arrPosDispo = arrPosDispo.filter(e => e !== arrPosDispo[pos])

            pos = getRandomNumber(0, arrPosDispo.length)
            posE2 = arrPosDispo[pos]
            arrPosDispo = arrPosDispo.filter(e => e !== arrPosDispo[pos])


            if (Math.abs(posE1 - posE2) > 4 && posE2 < fin) {
                (posE1 > posE2) ?
                posEspe.push({ 'msg': 'Jugador Desciende al cuadro ' + posE2, 'start': posE1, 'end': posE2 }):
                    posEspe.push({ 'msg': 'Jugador sube por la escalera al cuadro ' + posE2, 'start': posE1, 'end': posE2 });
            }

            interval--
        }

    }

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

        if (posicion < 25) {

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

        } else {
            /*Bucle para determinar si la posicion pertenece a una de las 
                posiciones especiales generadas*/
            for (let i = 0; i < posEspe.length; i++) {
                if (posEspe[i].start != null && posEspe[i].end != null) {
                    if (posicion == posEspe[i].start) {
                        console.log(posEspe[i].msg);
                        posicion = posEspe[i].end
                        console.log('***********');
                    }
                }

            }
        }


    }

    //Consola de posiciones especiales generadas
    //console.log(posEspe);


}

//Sacado de Google
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//Bonus 3 - Se puede definir las dimensiones del tablero
serpiente(10, 10)