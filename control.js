function validar(formulario) {
    var usua=document.getElementById("usuario");
    var cla=document.getElementById("clave");

    if(usua.value == "" || usua.value.indexOf("@", 0) == -1) {
        alert("El usuario no puede estar vacío y debe contener un @.");
        return false;
    }
    if(cla.value == "") {
        alert("Debe escribir una clave.");
        return false;
    }
    else {
        onclick("btn");
        return true;
    }
}