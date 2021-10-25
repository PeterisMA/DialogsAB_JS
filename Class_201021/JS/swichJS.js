
let day =  "";
let dayg = "";
    switch (new Date().getDay()) {
        default:
    dayg = "unfortunetaly neither Saturday, neither Sunday";
      case 0:
      case 6:
        day = "weekend day";
        break;
      case 1:  
      case 2: 
     case 3:  
      case 4:  
      case 5:
    day = "non weekend day";
        break;
    dayg = "error - such day insnt possible"
        
    }
    document.getElementById("demo").innerHTML = "Today is " + day + "(" + dayg + ")";

  
    function test1() {
let day =  "";
let dayg = "";
    switch (new Date().getDay()) {
        default:
    dayg = "unfortunetaly neither Saturday, neither Sunday";
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
     /* case 3:
        day = "Wednesday";
        break;*/
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case  6:
        day = "Saturday";
        break;
        
    }
    document.getElementById("demo").innerHTML = "Today is " + day + "(" + dayg + ")";
}