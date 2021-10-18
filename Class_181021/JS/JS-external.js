try {
    document.getElementById("demo1").innerHTML = "Izdruka no Internal scr";
}

try {
    document.getElementById("demo1").innerHTML = "Izdruka no Inline scr";
}
catch (err) {
    document.getElementById("error").innerHTML = "Kļūda no inline scr";

}