var args = location.search.substr(1).split('&');
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(args)
document.getElementById("txtId").value = parts[0][1]
document.getElementById("txtImagen").value = decodeURI(parts[1][1])
document.getElementById("txtNombre").value = decodeURI(parts[2][1])
document.getElementById("txtDescripcion").value = decodeURI(parts[3][1])
document.getElementById("txtNivel").value = decodeURI(parts[4][1])
document.getElementById("txtDuracion").value = decodeURI(parts[5][1])
document.getElementById("txtInicio").value = parts[6][1]
document.getElementById("txtDiasHorarios").value = decodeURI(parts[7][1])
document.getElementById("txtPrecio").value = parts[8][1]

function modificar() {
    let id = document.getElementById("txtId").value
    let img = document.getElementById("txtImagen").value
    let nom = document.getElementById("txtNombre").value
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
        precio: p
    }
    let url = "https://npcacproyectoeducativo.herokuapp.com/cursos/"+id
    var options = {
        body: JSON.stringify(curso),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
        })
        .catch(err => {
            console.error(err);
            alert("Error al Modificar")
        })      
}
