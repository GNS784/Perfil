/*                                      Menu Smartphone
*/
function abrirMenu(){
    document.querySelector('nav').style.left = "0px";
}
function fecharMenu(){
    document.querySelector('nav').style.left = "-100%";
}

/*                      Icon  Empresa mudar
*/

function entrarLogo() {
    const img = document.getElementById("imgnevio");
    img.style.opacity = 0;
    setTimeout(() => {
        img.src = "imagens/neviodesign/Nevio-reverse.logo.png";
        img.style.opacity = 1;
    }, 200);
}

function sairLogo() {
    const img = document.getElementById("imgnevio");
    img.style.opacity = 0;
    setTimeout(() => {
        img.src = "imagens/neviodesign/Nevio.logo.jpg";
        img.style.opacity = 1;
    }, 200);
}