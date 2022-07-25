function validar(){
  let nom = document.getElementById("nombre").value;
  let edad = document.getElementById("edad").value;
  let mail = document.getElementById("mail").value.indexOf("@");
  let submitOK = true;

  if(nom == ""){
    alert("Por favor, ingrese nombre y apellido.");
    submitOK = false; 
  }

  if(isNaN(edad) || edad < 1 || edad > 110){
    alert("Por favor, ingresre su edad. Su edad debe ser un número entre 1 y 110.");
     submitOK = false; 
  }

  if(mail == -1){
    alert("Ingrese un correo válido.");
     submitOK = false; 
  }

return submitOK;
}  


 /* Otras formas de validar: 

function validateForm() {
  let nom = document.forms["formulario"]["nombre"].value;
  if (nom == "") {
    alert("Por favor, ingrese nombre y apellido");
    return false;
  }
    
  let edad = document.forms["formulario"]["edad"].value;
  if (isNaN(edad) || edad < 1 || edad > 110) {
    alert("Por favor, ingrese su edad.");
    return false;
  }
  
  let em = document.forms["formulario"]["mail"].value;
  if (!em.includes("@")) {
    alert("Por favor, ingrese una casilla de correo electrónico válida.");
    return false;
  }


function validar(){
  let nom = document.getElementsByName("nombre")[0].value;
  let edad = document.getElementsByName("edad")[0].value;
  let mail = document.getElementsByName("mail")[0].value.indexOf("@");
  let submitOK = true;

  if(nom == ""){
    alert("Por favor, ingrese nombre y apellido.");
    submitOK = false; 
  }

  if(isNaN(edad) || edad < 1 || edad > 110){
    alert("Por favor, ingresre su edad. Su edad debe ser un número entre 1 y 110.");
     submitOK = false; 
  }

  if(mail == -1){
    alert("Ingrese un correo válido.");
     submitOK = false; 
  }

return submitOK;
}  
*/