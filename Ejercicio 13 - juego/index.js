const jugarPiedraPapelTijera = () => {
    const usuarioUno = prompt("Usuario 1: piedra, papel o tijera?")

    const usuarioDos = prompt("Usuario 2: piedra, papel o tijera?")

    return obtenerResultado(usuarioUno, usuarioDos);
}

const obtenerResultado = (a,b) => {
    if (a === b ) {
        return ("¡Empate!");
    }
    else if (a === "tijera" && b === "piedra" || a === "piedra" && b === "tijera" ) {
        return ("¡Ganó piedra!");

    }
    else if (a === "papel" && b === "tijera" || a === "tijera" && b === "papel" ) {
        return ("¡Ganó tijera!");
    }
    else if (a === "papel" && b === "piedra" || a === "piedra" && b === "papel" ) {
        return ("¡Ganó papel!");
    }

}



alert (jugarPiedraPapelTijera());
alert (jugarPiedraPapelTijera());
alert (jugarPiedraPapelTijera());




