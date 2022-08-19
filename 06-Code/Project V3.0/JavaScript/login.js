var objPeople = [
    {
        username: "allison",
        password: "12345"
    },
    {
        username: "johnny",
        password: "123456"
    },
    {
        username: "carlos",
        password: "1234567"
    },
    {
        username: "danny",
        password: "12345678"
    }
]

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for(i = 0; i < objPeople.length; i++){
        if(username == objPeople[i].username && password == objPeople[i].password) {
            window.alert("Bienvenido "+username+" !!!");
            return;
        }
    }
    window.alert("usuario y contraseña incorrectas");
    document.getElementById("username").value="";
    document.getElementById("password").value="";
}