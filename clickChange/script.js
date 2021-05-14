let display = document.getElementById("color-display");
let btn = document.querySelector("button");

var color = ["#FF0000","#00FF00","#0000FF","#CD853F","#00FFFF","#FF000FF"]

document.body.style.backgroundColor=color[0];
display.textContent=`${color[0]}`;
btn.addEventListener("click",()=>{
    let rand = Math.floor(Math.random()*color.length);
    document.body.style.backgroundColor=color[rand];
    display.textContent=`${color[rand]}`;
})