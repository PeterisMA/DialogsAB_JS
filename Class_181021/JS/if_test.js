// const hour = new Date().getHours() <18 { 
 //   document.getElementById("demo").innerHTML = ""Good day!";
//}
function compare() {
var a = document.getElementById("aval").value;
var b = document.getElementById("bval").value;
var conclusion = "";

if (a > b) {
  conclusion = "a (" + a + ") is bigger than b (" + b + ")";
}
else if (a<b) {
    conclusion = "a (" + a + ") is smaller than b (" + b + ")";
}
else {
    conclusion = "a (" + a + ") is equal to b (" + b + ")";
}

document.getElementById("demo").innerHTML = conclusion;
}

function compare_three() {
    var a = document.getElementById("aval").value;
    var b = document.getElementById("bval").value;
    var c = document.getElementById("cval").value;
    var conclusion = "...";
    var temp;

    if (a > b) {temp = a; a = b; b = temp;}
    if (b > c) {temp = b; b = c; c = temp;}
    if (a > b) {temp = a; a = b; b = temp;}

    document.getElementById("demo").innerHTML = a + " " + " " + b + " " + c  +;
}