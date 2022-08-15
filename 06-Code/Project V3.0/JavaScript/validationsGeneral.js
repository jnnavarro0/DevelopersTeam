
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
        alert("Se acepta solo numeros");
        return false;

    } else {
        return true;
    }
}

function validatePrices() {
    var expRegPrices = /^-?[0-9][0-9,\.]+$/;
    var prices = document.getElementById("prices");
    if (!expRegPrices.exec(prices.value)) {
        alert("Solo se acepta numeros");
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
        alert("Solo se acepta letras y numeros");
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
