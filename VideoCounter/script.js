const textCounter = document.getElementById("txtCounter");
var video = document.getElementById("myVideo");
var txt=document.querySelector(".text");
var text = document.getElementById("txt");
// var body = document.querySelector("body");

var i=5;
function counter(){
   
//    textCounter.style.transition=";
   // var v=document.createElement("video");
   if(i==-4){
       video.removeChild(video.childNodes[0]);
      text.innerHTML="";
       var vid=document.createElement("video");
       vid.src="viddd.mp4";
       vid.autoplay=true;
       vid.loop=true;
       
    //    vid.controls="true";
       video.appendChild(vid);
       textCounter.innerHTML="Good Morning";
       textCounter.style.fontFamily="fantasy";
       textCounter.style.opacity="0.7"
    //    txt.width="90px";
    //    txt.height="90px";
       txt.innerHTML="Have Coffee...";
       
    //    txt.justify-content = "center";
       
       return;
   } 

   
   
   if(i==0){
      var v=document.createElement("video");
       v.src="ezgif.com-gif-maker.mp4";
       v.autoplay=true;
       video.appendChild(v);
       textCounter.innerHTML="Sun Rising..";
       textCounter.style.fontFamily="fantasy";
       textCounter.style.opacity="0.8"
       text.innerHTML="";
    //    txt.width="90px";
    //    txt.height="90px";
   }
   else if(i<0 && i>-4){
      textCounter.innerHTML="Sun Rising..";
      text.innerHTML="";
   }
   else{
      text.innerHTML="Morning time remaining..."
      textCounter.innerHTML=i;
   }
   
   
   i--;
   setTimeout("counter()",1000);
//    textCounter.style.transform="scale(1)";
}

window.onload=counter;