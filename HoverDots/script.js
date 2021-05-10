var text = document.querySelector(".text");
const dotContainer = document.querySelector(".dot-container");

var colors = ["red","blue","yellow","green","peru","crimson"];
setInterval("setColor(text)",2000);
for(var i=0;i<500;i++){
    const div = document.createElement('div');
    div.classList.add('square');
    div.addEventListener('mouseover',() =>setColor(div));
    div.addEventListener('mouseout',() =>removeColor(div));
    dotContainer.appendChild(div);
}

function setColor(e){
    var color=colors[Math.floor(Math.random()*colors.length)];
    e.style.background = `${color}`;
    e.style.boxShadow = `0 0 .2rem ${color}`;
}

function removeColor(e){
    e.style.background = "#1d1d1d";
    e.style.boxShadow = "0 0 2px #000"
}



