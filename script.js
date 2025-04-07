function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('Enviamos o formulario');
    }
    else{
        alert('Email ou Senha Incorreto')
    }
}