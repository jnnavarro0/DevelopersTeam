function validateid() {
    var expRegid = /^[1-9]{10}$/;
    var Personid = document.getElementById("id");
    if (!expRegid.exec(Personid.value)) {
        alert("Formato incorrecto");
        return false;

    } else {
        return true;
    }
}

function validateNamePerson() {
    var expRegNamePerson = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var PersonName = document.getElementById("nameR");
    if (!expRegNamePerson.exec(PersonName.value)) {
        alert("Solo se aceptan letras");
        return false;

    } else {
        return true;
    }
}
function validateDirection() {
    var expRegDirection = /^[a-zA-Z0-9\_\-\s]{1,50}$/;
    var PersonDirection = document.getElementById("address");
    if (!expRegDirection.exec(PersonDirection.value)) {
        alert("No se aceptan caracteres especiales");
        return false;

    } else {
        return true;
    }
}
function validateNamePassword() {
    var expRegPassword = /^.{2,12}$/;
    var PersonPassword = document.getElementById("password");
    if (!expRegPassword.exec(PersonPassword.value)) {
        alert("No se aceptan menos de 2 dígitos");
        return false;

    } else {
        return true;
    }
}


