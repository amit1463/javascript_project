//DOM
var image = document.getElementById("img");
var contt = document.getElementById("container");
var btn = document.createElement("button");
var imgCounter=document.querySelector("#txtCounter");
var video = document.querySelector("video");
// var circleCounter=["pehlagol","","","",""];
var circleCounter=document.querySelector("#allCircle").children;

contt.appendChild(btn);
btn.innerHTML="play";
var images=[
    "https://images.unsplash.com/photo-1595761970908-aeeb4c79b086?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1598194550497-694db6d310fc?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1618465818399-5e760c5d54e5?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1619021897540-344c66b2222e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1607053075722-dff3fb966413?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
];

var border = [
    "2px solid peru",
    "2px solid violet",
    "2px solid indigo",
    "2px solid aquamarine",
    "2px solid green",
]

function colorChange(i){
    circleCounter[i].style.background="whitesmoke";
    var count=i;
    while(true){
        count++;
        if(count==5){
            count=0;
        }
        if(count==i){
            return;
        }
        circleCounter[count].style.background="rgba(0,0,0,0.6)";
       
    }
}

var i=0;
var a;
image.src=images[i];
image.style.border=border[i]
function screenSaver(){
    i++;
    if(i==images.length){
        i=0;
    }
    // console.log(i);
    imgCounter.innerHTML=i+1;
    image.src=images[i];
    image.style.border=border[i];
    colorChange(i);
    a=setTimeout("screenSaver()",1000);
    
}
var j=0;
function clickk(){
    
    if(j%2!=0){
        clearTimeout(a);
        btn.innerHTML="play";
        video.play();
    }
    else{
        screenSaver();
        btn.innerHTML="pause";
        video.pause();
    }
    j++;
}
btn.addEventListener("click", clickk);


//screenSaver();




//images[0]="https://images.unsplash.com/photo-1595761970908-aeeb4c79b086?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
