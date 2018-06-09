var width;
var height;

$(document).ready(function() {

    width = (document.getElementById('imageGal').width + window.screen.availWidth) /3.88;
    height = (document.getElementById('imageGal').width + window.screen.availHeight) /3.88;


    document.getElementById("about").style.margin = "10px 10px 10px " + (width/1/20)+"px";

    //document.getElementById("imageGal").style.width = width+"px";
    document.getElementById("imageGal").style.height = height+"px";
    startSlideShow();
});



var imageSources = ["comp.jpg", "compEndGame.png", "compGame.jpg", "5216TeamMember2018.jpeg", "awardMidland.png", "awardMidland1.png", "Driving.png", "pits.png", "teamPicture.png",
"20180324_145929.gif", "20180427_161139_resized.png", "20180427_152009_resized.jpg", "20180414_112920_resized.png"]

function startSlideShow(){
  var index = 0;
  setInterval (function(){
    if (index === imageSources.length) {
      index = 0;
    }
    document.getElementById("imageGal").src = "images/"+imageSources[index];
    //document.getElementById("imageGal").style.width = width+"px";
    document.getElementById("imageGal").style.height = height+"px";
    index++;
  } , 10000); // 10,000 is 10 sec be for changing pics
}
