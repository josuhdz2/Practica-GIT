document.getElementById('acceder').addEventListener('click', ()=>
{
    var password=document.getElementById('password');
    var email=document.getElementById('email');
    if(email.value=="josuehdz@gmail.com" && password.value=="superdificil")
    {
        window.location.href='home.html';
        localStorage.setItem('login', "success");
    }
    else
    {
        document.getElementById('mensaje').setAttribute("style", "");
        password.value=='';
        email.value=='';
    }
})