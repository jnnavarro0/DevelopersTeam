
function validateName()
{
    var expRegName= /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var productName = document.getElementById("name");
    if (!expRegName.exec(productName.value))
    {
        alert("Se acepta solo letras");
        return false;

    }else 
    {
        return true;
    }
}

function validateNumbers()
{
    var expRegNumbers= /^[1-9]+$/; 
    var numbers = document.getElementById("numbers");
    if (!expRegNumbers.exec(numbers.value))
    {
        alert("Se acepta solo numeros");
        return false;

    }else 
    {
        return true;
    }
}

function validatePrices()
{
    var expRegPrices= /^-?[0-9][0-9,\.]+$/;
    var prices= document.getElementById("prices");
    if(!expRegPrices.exec(prices.value))
    {
        alert("Solo se acepta numeros");
        return false;
    }
    else
    {
        return true;
    }

}
