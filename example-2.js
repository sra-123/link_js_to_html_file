function add(){
    var a=document.getElementById("text_1").value;
    var b=document.getElementById("text_2").value;
    document.getElementById("P_1").textContent=Number(a)+Number(b);
}
function sub(){
    var a=document.getElementById("text_1").value;
    var b=document.getElementById("text_2").value;
    document.getElementById("P_1").textContent=a-b;
}
function mul(){
    var a=document.getElementById("text_1").value;
    var b=document.getElementById("text_2").value;
    document.getElementById("P_1").textContent=a*b;
}
function div(){
    var a=document.getElementById("text_1").value;
    var b=document.getElementById("text_2").value;
    document.getElementById("P_1").textContent=a/b;
}
function mod(){
    var a=document.getElementById("text_1").value;
    var b=document.getElementById("text_2").value;
    document.getElementById("P_1").textContent=a%b;
}