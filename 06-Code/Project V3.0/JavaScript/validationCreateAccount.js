function validateid() {
    var expRegid = /^[[:space:]][1-9]{10}$/;
    var Personid = document.getElementById("id");
    if (!expRegid.exec(Personid.value)) {
        alert("Formato incorrecto");
        return false;

    } else {
        return true;
    }
}

function validateNamePerson() {
    var expRegNamePerson = /^[[:space:]][a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var PersonName = document.getElementById("nameR");
    if (!expRegNamePerson.exec(PersonName.value)) {
        alert("Solo se aceptan letras");
        return false;

    } else {
        return true;
    }
}


