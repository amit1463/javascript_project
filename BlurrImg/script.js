let image = document.querySelector("img");
let text = document.querySelector("span");
let wText = document.querySelector("h1");
let lText = document.querySelector("h2");


let t=30;
function blurr(){
   t+=1;
   if(t>=100 && t<115){
     lText.innerText='Loaded';
     wText.style.fontSize = "95px";
     wText.style.color = "#3D9970"
     wText.innerHTML="100%";
     wText.style.transition = "0.5s ease";
     wText.style.textShadow = "2px 3px 5px grey";
    //  clearTimeout(a);
   }
   else if(t==115){
    lText.innerText='';
    wText.innerHTML="";
    return;
   }
   else{
    text.innerHTML=t;
    // wText.innerHt=`${text}%`;
    image.style.opacity=t/100;
    image.style.filter = `blur(${100-t}px)`
   }
  a=setTimeout(blurr,140);
}

blurr();
// window.onload=blurr;