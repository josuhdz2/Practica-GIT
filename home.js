if(localStorage.getItem('login')!="success")
{
    window.location.href="index.html";
}
document.getElementById('logout').addEventListener('click', ()=>
{
    if(confirm('Seguro que deseas cerrar sesion?'))
    {
        localStorage.clear();
        window.location.reload();
    }
})