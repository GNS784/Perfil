var imgLina = document.getElementById("imgLina");
var paragLina = document.getElementById("paragLina");
var paragImgLina = document.getElementById("paragImgLina");
if (window.innerWidth < 430){
    function clicarheader(){
        let header = document.getElementById("cabecalho");
        let nome = document.getElementById("nome");
        let texto = document.getElementById("texto");
        nome.style.top = "50px";
        texto.style.top = "80px";
        texto.style.opacity = "1"
        texto.style.transition = "all 1.4s ease 0.5s"
        header.style.backgroundimage = "url(imagens/fundo001.jpg)"
    }
    function clicarimg(){
        imgLina.style.right = "20%";
        imgLina.style.width = "120px"
        imgLina.style.height = "120px"
        imgLina.style.marginTop = "60px"
        paragLina.style.opacity = "1";
        paragImgLina.style.opacity = "0";
    }
} else{
    function clicarimg(){
        imgLina.style.right = "20%";
        imgLina.style.width = "200px"
        imgLina.style.height = "200px"
        paragLina.style.opacity = "1";
        paragImgLina.style.opacity = "0";
    }
}