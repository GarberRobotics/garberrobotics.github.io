
var width;
var height;

$(document).ready(function() {
    width = document.getElementById('imageGal').width;
    height = document.getElementById('imageGal').height;
});

var imageSources = ["5216TeamMember2018.jpeg", "awardMidland.png", "awardMidland1.png", "comp.jpg", "compEndGame.png", "compGame.jpg", "Driving.png", "pits.png", "teamPicture.png"]

var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("imageGal").src = "images/"+imageSources[index];
  document.getElementById("imageGal").style.width = width+"px";
  document.getElementById("imageGal").style.height = height+"px";
  index++;
} , 2000);


function includeHTML() { //Thanks w3!
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
