// simulando os dados

var dado1 = Math.floor(Math.random() * 6) + 1;

var dado2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 =  "images/dice" + dado1 + ".png";
var image1 = document.getElementById("img1");
image1.setAttribute("src", randomImage1);

var randomImage2 = "images/dice" + dado2 + ".png";
var image2 = document.getElementById("img2");
image2.setAttribute("src", randomImage2)

if (dado1 > dado2){
    document.getElementById("title").innerHTML="&#127937 O jogador 1 ganhou!"
} else if (dado1 < dado2){
    document.getElementById("title").innerHTML="&#127937 O jogador 2 ganhou!"
}else{
    document.getElementById("title").innerHTML="Empate!"
}
