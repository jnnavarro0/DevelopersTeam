
function validateName()
{
    var expRegName= /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var productName = document.getElementById("nameProduct");
    if (!expRegName.exec(productName.value))
    {
        alert("Only write letters");
        return false;

    }else 
    {
        return true;
    }
}
