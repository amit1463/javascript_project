var text=document.getElementById("textCounter");
var main=document.getElementById("main");
var body=document.querySelector("body");

var i=0;
function counter(){
  i++;
  if(i==1000){
    text.style.fontSize="50px";
    text.style.color="red";
     text.innerHTML="You got a blue tick";
     body.style.background="rgb(216, 245, 179)";
     var image = document.createElement("img");
     image.src="https://st3.depositphotos.com/3894705/16213/i/600/depositphotos_162131530-stock-photo-painted-blue-tick-in-black.jpg";
    //  image.style.position="relative";
    //  image.style.bottom="160px"
     main.insertBefore(image,text);
     image.style.height="100px";
     image.style.borderRadius="20px"
     image.style.width="100px";
     return;
  }
  text.innerHTML=i;
  text.style.fontSize="60px";
  text.style.fontFamily="fantasy"
  text.style.color="blue"

  setTimeout("counter()",0.1);

}
window.onload=counter;