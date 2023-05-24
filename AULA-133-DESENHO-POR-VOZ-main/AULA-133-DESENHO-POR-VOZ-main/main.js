var maca;
var manga;
var morango;


var SpeechRecognition= window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function setup(){
  canvas = createCanvas(300,300);
  background('white')
}

function draw(){
   canvas.center();

   if(desenhe){

    if(fala=="retângulo"||fala=='retangulo'){
rect(x,y,50,30)
msg.innerHTML='Foi desenhado um retangulo'
    }
    
    if(fala=="círculo"||fala=='circulo'){
circle(x,y,30)
msg.innerHTML='Foi desenhado um circulo'
    }
    if(fala=='maçã'){
image(maca,x,y,50,50)
    }
    if(fala=='manga'){
      image(manga,x,y,50,50)
          }
if(fala=='morango'){
image(morango,x,y,50,50)
 }
   }
}
var msg=document.getElementById('msg')
function comecar(){
  msg.innerHTML='O sistema esta ouvindo 👂🏻...'
  recognition.start();
}
var fala='';
var x = 0;
var y = 0;
var desenhe=false
recognition.onresult=(e)=>{
  console.log(e);
  fala=e.results[0][0].transcript;
  msg.innerHTML='O sistema ouviu:'+ fala;


  if(fala=='maça'||fala=="maçã"||fala=='manga'||fala=='morango'||fala=='circulo'||fala=='círculo'|| fala=='retângulo'||fala=='retangulo'){
    x= random(30,270)
    y= random(30,270)
    desenhe=true;
  }
  
}
function preload(){
  maca=loadImage('maca.png')
  manga=loadImage('manga.png')
morango=loadImage('morango.png')
}
