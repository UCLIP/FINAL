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



function utilisateurinteract1(){
    

q1=prompt("ou voulez vous aller tout d'abord: ACCEUIL, AUTOMATISATION, IA, CONSEQUENCES, FUTUR");
if (q1=="ACCEUIL"){
    alert("chouette a present vous allez rester ici et de nouvelles interactions viendront, vous pourrez toujours utiliser les boutons pour changer de page :)");
    
    
   
}
        else if (q1=="AUTOMATISATION"){
        

            window.location.href = "Perimeter/index.html";
            
            
           
        
        
    }
    else if (q1=="IA"){
        

        window.location.href = "IA/index.html";
       
        
        document.write("choix 1 :",q1);
       
    
    
    
}
else if (q1=="CONSEQUENCES"){
        

    window.location.href = "consequences/index.html";
   
    
   



}
else if (q1=="FUTUR"){
        

    window.location.href = "futur/index.html";
   
    
   



}
while(q1 != "ACCEUIL" && q1 != "IA" && q1!="CONSEQUENCES" && q1!= "AUTOMATISATION" && q1!= "FUTUR")  {

    q1=prompt("rentrez une entrée valide, ACCEUIL, AUTOMATISATION, IA, CONSEQUENCES")
}
setTimeout(slow1, 2000);
setTimeout(slow2, 4000);
setTimeout(slow3, 6000);
setTimeout(slow4, 8000);
function slow1(){
    document.write("<center><B> <font size = '7'><font color='red'>choix</B></center></font></font>");
}
function slow2(){

    document.write("<center><B> <font size = '7'><font color='red'> 1 = </B></center></font></font>");
}
function slow3(){

    document.write("<center><B> <font size = '7'><font color='red'>ACCEUIL</B></center></font></font>");
    
    
   
}
function slow4(){
    document.write("  .")

    window.location.href = "index1.html";

}

}
utilisateurinteract1()





