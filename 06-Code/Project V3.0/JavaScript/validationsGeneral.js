
function validateName() {
    var expRegName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var productName = document.getElementById("name");
    if (!expRegName.exec(productName.value)) {
        alert("Se acepta solo letras");
        return false;

    } else {
        return true;
    }
}

function validateNumbers() {
    var expRegNumbers = /^[1-9]+$/;
    var numbers = document.getElementById("numbers");
    if (!expRegNumbers.exec(numbers.value)) {
        alert("Se acepta solo números");
        return false;

    } else {
        return true;
    }
}

function validatePrices() {
    var expRegPrices = /^-?[0-9][0-9,\.]+$/;
    var prices = document.getElementById("prices");
    if (!expRegPrices.exec(prices.value)) {
        alert("Solo se acepta números");
        return false;
    }
    else {
        return true;
    }

}

function validateDescription(){
    var expRegDescription=/^[A-Za-z0-9\s]+$/;
    var description= document.getElementById("description");
    if (!expRegDescription.exec(description.value)){
        alert("Solo se acepta letras y números");
        return false;
    }
    else{
        return true;
    }
}

function validateDateProduct()
{
    var expRegDateProduct=/^[0-31][0-12][2022-2060]+$/;
    var dateProduct=document.getElementById("dateProduct");
    if(!expRegDateProduct.exec(dateProduct.value)){
        alert("Se recepta productos a partir del 2022");
        return false;
    }
    else{
        return true;
    }
}

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
        prompt("mensaje personalizado", "valor por defecto");
        return false;

    } else {
        return true;
    }
}

function validateDatePerson() {
    var expRegDatePerson = /^[0-31][0-12][1897-2022]+$/;
    var DatePerson = document.getElementById("nameR");
    if (!expRegDatePerson.exec(DatePerson.value)) {
        alert("Formato incorrecto");
        return false;

    } else {
        return true;
    }
}