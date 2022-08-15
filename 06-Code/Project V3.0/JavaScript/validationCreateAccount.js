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
    var expRegNamePerson = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s][^[:space:]]+$/;
    var PersonName = document.getElementById("nameR");
    if (!expRegNamePerson.exec(PersonName.value)) {
        alert("Solo se acepta letras");
        return false;

    } else {
        return true;
    }
}

