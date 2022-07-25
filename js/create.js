function guardar() {

    let nom = document.getElementById("txtNombre").value
    let img = document.getElementById("txtImagen").value
    let desc = document.getElementById("txtDescripcion").value
    let niv = document.getElementById("txtNivel").value
    let dur = document.getElementById("txtDuracion").value
    let inc = document.getElementById("txtInicio").value
    let dh = document.getElementById("txtDiasHorarios").value
    let p = document.getElementById("txtPrecio").value

    let curso = {
        imagen: img,
        nombre: nom,
        descripcion: desc,
        nivel: niv,
        duracion: dur,
        inicio: inc,
        dias_horarios: dh,
        precio: p,
    }
    let url = "https://npcacproyectoeducativo.herokuapp.com/cursos"
    var options = {
        body: JSON.stringify(curso),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
        })
        .catch(err => {
            alert("Error al grabar")
            console.error(err);
        })
}

function borrarCaracter() {
    let str = document.getElementById("txtImagen").value.replaceAll("&", "");
    document.getElementById("txtImagen").value = str;
}



