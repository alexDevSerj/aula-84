canvas = document.getElementById("mycanvas")
ctx = canvas.getContext("2d")

roverwidth=100 
roverheight=90
roveerX=10
roveerY=10

backgroundImage="mars.jpg";
roveerImage="rover.png"

function add(){
  backgroundImgTag=new Image();
  backgroundImgTag.onload=uploadBackground;
  backgroundImgTag.src=backgroundImage;

  roveerImgTag = new Image();
  roveerImgTag.onload = uploadRoveer;
  roveerImgTag.src = roveerImage
}
function uploadBackground(){
  ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height)
}

function uploadRoveer(){
  ctx.drawImage(roveerImgTag,roveerX,roveerY,roverwidth,roverheight);
}
window.addEventListener("keydown",mykeydown);

function mykeydown(e){
  keyPressed=e.keyCode;
  if(keyPressed == '38'){
    up();
    console.log("up")  
  }

  if(keyPressed == '40'){
    down();
    console.log("d")  
  }

  if(keyPressed == '37'){
    left();
    console.log("l")  
  }

  if(keyPressed == '39'){
    right();
    console.log("r")  
  }
}
