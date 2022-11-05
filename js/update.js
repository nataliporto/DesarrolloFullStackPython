var args = location.search.substr(1).split('&');
var parts = {}
for (let i = 0; i < args.length; ++i) { 
    let aux = args[i].split('=');
    parts[aux[0]] = aux[1] 
}
console.log(args)
document.getElementById("txtId").value = parts["id"]
document.getElementById("txtImagen").value = decodeURI(parts["imagen"])
document.getElementById("txtNombre").value = decodeURI(parts["nombre"])
document.getElementById("txtDescripcion").value = decodeURI(parts["descripcion"])
document.getElementById("txtNivel").value = decodeURI(parts["nivel"])
document.getElementById("txtDuracion").value = decodeURI(parts["duracion"])
document.getElementById("txtInicio").value = parts["inicio"]
document.getElementById("txtDiasHorarios").value = decodeURI(parts["dias_horarios"])
document.getElementById("txtPrecio").value = parts["precio"]

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
