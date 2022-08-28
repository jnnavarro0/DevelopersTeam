var users = [
    {
        username: "allison",
        password: "123458"
    },
    {
        username: "johny",
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

function validateUser() {
    var user = document.getElementById("userGerister").value
    for(i = 0; i < users.length; i++){
        if(user == users[i].username) {
            window.alert("El usuario " + user + " ya existe");
            return false;
        }
    }
    document.getElementById("userGerister").value="";
}