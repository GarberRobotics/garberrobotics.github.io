
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
