
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
