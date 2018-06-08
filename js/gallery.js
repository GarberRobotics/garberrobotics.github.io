
var width;
var height;

$(document).ready(function() {
    width = document.getElementById('imageGal').width;
    height = document.getElementById('imageGal').height;
});

document.getElementById("aboutText").style.padding = "10px 10px 10px " + width+"px";

var imageSources = ["5216TeamMember2018.jpeg", "awardMidland.png", "awardMidland1.png", "comp.jpg", "compEndGame.png", "compGame.jpg", "Driving.png", "pits.png", "teamPicture.png",
"20180324_145929.gif", "20180427_161139_resized.png", "20180427_152009_resized.jpg", "20180414_112920_resized.png"]

var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("imageGal").src = "images/"+imageSources[index];
  document.getElementById("imageGal").style.width = width+"px";
  document.getElementById("imageGal").style.height = height+"px";
  index++;
} , 10000); // 10,000 is 10 sec be for changing pics
