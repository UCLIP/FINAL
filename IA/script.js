document.getElementById("perimeter").onclick = function () {
    location.href = "Perimeter/index.html";
};
document.getElementById("IA").onclick = function () {
    location.href = "IA/index.html";
};
document.getElementById("consequences").onclick = function () {
    location.href = "consequences/index.html";
};
document.getElementById("futur").onclick = function () {
    location.href = "futur/index.html";
};
document.getElementById("acceuil").onclick = function () {
    location.href = "../index1.html";
};
setTimeout(slow1, 2000);
setTimeout(slow2, 4000);
setTimeout(slow3, 6000);
setTimeout(slow4, 8000);
function slow1(){
    document.write("<center><B> <font size = '7'><font color='red'>choix</B></center></font></font>");
}
function slow2(){

    document.write("<center><B> <font size = '7'><font color='red'> 1= </B></center></font></font>")
}
function slow3(){

    document.write("<center><B> <font size = '7'><font color='red'>IA</B></center></font></font>");
    
    
   
}
function slow4(){
    document.write("  .")

    window.location.href = "index1.html";

}