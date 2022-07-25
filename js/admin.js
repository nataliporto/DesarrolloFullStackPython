function ingresar() {
    let pass = document.getElementById("contraseña").value;
    let submitOK = true;

    if (pass != "password") {
        alert("Ingrese una contraseña válida.");
        submitOK = false;
    }
    return submitOK;
}


function mostrarContraseña() {
    var temp = document.getElementById("contraseña");
    if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }
}
  
