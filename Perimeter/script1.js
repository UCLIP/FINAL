document.getElementById("perimeter").onclick = function () {
    location.href = "Perimeter/index.html";
};
document.getElementById("IA").onclick = function () {
    location.href = "../IA/index.html";
};
document.getElementById("consequences").onclick = function () {
    location.href = "../consequences/index.html";
};
document.getElementById("futur").onclick = function () {
    location.href = "../futur/index.html";
};
document.getElementById("acceuil").onclick = function () {
    location.href = "../index1.html";
};
setTimeout(couleur, 4000);
function couleur()
{
    color=prompt("entrez la couleur que vous voulez en anglais pour le site ");
    document.body.style.backgroundColor =color;
}
setTimeout(couleurtxt, 4000);
function couleurtxt()
{
    color=prompt("entrez la couleur que vous voulez en anglais pour le texte ");
    document.body.style.color =color;
}
var diaporama = 1;
affichage(diaporama);

function boutons(n) {
  affichage(diaporama += n);
}

function actifIndic(n) {
  affichage(diaporama = n);
}

function affichage(n) {
  var i;
  var diapoImg = document.getElementsByClassName("diapo");
  var indic = document.getElementsByClassName("demo");
  if (n > diapoImg.length) {diaporama = 1}    
  if (n < 1) {diaporama = diapoImg.length}
  for (i = 0; i < diapoImg.length; i++) {
     
	 diapoImg[i].style.opacity = "0";
  }
  for (i = 0; i < indic.length; i++) {
     indic[i].className = indic[i].className.replace(" numeros", "");
  }
  diapoImg[diaporama-1].style.opacity = "1";    
  indic[diaporama-1].className += " numeros";
}

