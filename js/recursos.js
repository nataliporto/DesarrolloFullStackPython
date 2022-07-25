function corregir() {
    let rta1 = document.getElementById("1").value;
    if (rta1 == "heiße" || rta1 == "bin") {
        document.getElementById("1").value = rta1 + "   Richtig!:)";
        document.getElementById("1").style.color = "green";
    } else {
        document.getElementById("1").value = "Versuche es noch einmal!";
        document.getElementById("1").style.color = "red";
    }

    let rta2 = document.getElementById("2").value;
    if (rta2 == "bin") {
        document.getElementById("2").value = rta2 + "   Richtig!:)";
        document.getElementById("2").style.color = "green";
    } else {

        document.getElementById("2").value = "Versuche es noch einmal!";
        document.getElementById("2").style.color = "red";
    }
    let rta3 = document.getElementById("3").value;
    if (rta3 == "komme") {
        document.getElementById("3").value = rta3 + "   Richtig!:)";
        document.getElementById("3").style.color = "green";
    } else {

        document.getElementById("3").value = "Versuche es noch einmal!";
        document.getElementById("3").style.color = "red";
    }
    let rta4 = document.getElementById("4").value;
    if (rta4 == "bin") {
        document.getElementById("4").value = rta4 + "   Richtig!:)";
        document.getElementById("4").style.color = "green";
    } else {
        document.getElementById("4").value = "Versuche es noch einmal!";
        document.getElementById("4").style.color = "red";

    }
    let rta5 = document.getElementById("5").value;
    if (rta5 == "arbeite") {
        document.getElementById("5").value = rta4 + "   Richtig!:)";
        document.getElementById("5").style.color = "green";
    } else {
        document.getElementById("5").value = "Versuche es noch einmal!";
        document.getElementById("5").style.color = "red";
    }

    let rta6 = document.getElementById("6").value;
    if (rta6 == "sind") {
        document.getElementById("6").value = rta6 + "   Richtig!:)";
        document.getElementById("6").style.color = "green";
    } else {
        document.getElementById("6").value = "Versuche es noch einmal!";
        document.getElementById("6").style.color = "red";
    }
}

function corregir2() {
    let rta = document.getElementById("rta").value;
    if (rta == "Die Ampel" || rta == "die Ampel" || rta=="Ampel") {
        document.getElementById("rta").value = rta + "   Richtig!:)";
        document.getElementById("rta").style.color = "green";
    } else {
        document.getElementById("rta").value = "Versuche es noch einmal!";
        document.getElementById("rta").style.color = "red";
    }
}

function darSolucion() {
    document.getElementById("1").value = "heiße";
    document.getElementById("1").style.color = "Black";
    document.getElementById("2").value = "bin";
    document.getElementById("2").style.color = "Black";
    document.getElementById("3").value = "komme";
    document.getElementById("3").style.color = "Black";
    document.getElementById("4").value = "bin"
    document.getElementById("4").style.color = "Black";
    document.getElementById("5").value = "arbeite"
    document.getElementById("5").style.color = "Black";
    document.getElementById("6").value = "sind"
    document.getElementById("6").style.color = "Black";
}

function darSolucion2() {
    document.getElementById("rta").value = "Die Ampel";
    document.getElementById("rta").style.color = "Black";
}

function borrar() {
    let elementos = document.getElementsByClassName("espacio");
    for (let elemento of elementos) {
        elemento.value = "";
    }
}

function borrar2() {
    document.getElementById("rta").value = "";
}


/* Otras opciones:
let elementos = document.getElementsByClassName("espacio");
for (i=0; i<elementos.length; i++){
        elementos[i].value="";
}

for (let elemento of document.getElementsByClassName("espacio")){
    elemento.value="";
}
*/




// document.querySelector(".rta");  Get the first element of the class "rta"
