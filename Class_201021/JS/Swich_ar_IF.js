/*
    let text;
    switch (new Date().getDay()) {
      case 4:
      case 5:
        text = "Soon it is Weekend";
        break;
      case 0:
      case 6:
        text = "It is Weekend";
        break;
      default:
        text = "Looking forward to the Weekend";
    }
    document.getElementById("demo").innerHTML = text;
   */
var day = new Date().getDay();
if (day == 4 || day == 5) {
  text = "Soon is Wknd"
}
else if (day == 0 || day == 6) {
  text = "It is Wknd";
}
else {
  text = "Looking forward to the Wknd"
}
document.getElementById("demo").innerHTML = text;