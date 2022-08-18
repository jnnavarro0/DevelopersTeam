
function validateAffair(){                // Para validar el campo asunto
  var expRegAffair= /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  var affair= document.getElementById("affair");
  if(!expRegAffair.exec(affair.value)){
    alert("Se recibe solo letras");
    document.getElementById("affair").value=""; // limpia el campo en caso se ingrese números
  }
}

function validateName() {
    var expRegName = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var productName = document.getElementById("name");
    if (!expRegName.exec(productName.value)) {
        alert("Se recibe solo letras");
        document.getElementById("name").value = ""; // limpia el campo en caso se ingrese números
       
    } 
}

function validateNameClient(){
    var expRegNameClient = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var nameClient= document.getElementById("nameClient");
    if(!expRegNameClient.exec(nameClient.value)){
        alert("Se recibe solo letras");
        document.getElementById("nameClient").value=""; // limpia el campo en caso se ingrese números
    }
}

function validateMessage(){
    var expRegMessage=/^[A-Za-z0-9\s]+$/;
    var message= document.getElementById("message");
    if (!expRegMessage.exec(message.value)){
        alert("Se recibe solo letras y números");
        document.getElementById("message").value=""; // limpia el campo en caso no se ingrese letras o números
    
    }
}

function validateEmail(){
    var expRegEmail= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    var email= document.getElementById("email");
    if(!expRegEmail.exec(email.value)){
        alert("El correo ingresado no es valido");
        document.getElementById("email"); // limpia el campo en el caso que el correo electrónico no sea valido
    }
}

/*
    Empezar por el identificador o nombre del usuario ^\w+([.-_+]?\w+)*
    Seguido por el símbolo de la arroba @
    Por último, el nombre del dominio del correo \w+([.-]?\w+)*(\.\w{2,10})+$
*/

