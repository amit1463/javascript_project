const img = document.querySelector("img");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const imgg = document.querySelector(".imgg");

var images = [
    "https://i1.wp.com/statusbro.in/wp-content/uploads/2018/05/Bike-Rider-Whatsapp-Status.jpg?resize=505%2C505&ssl=1",
    "https://images.unsplash.com/photo-1559289431-9f12ee08f8b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW90b3JjeWNsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1531327431456-837da4b1d562?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW90b3JjeWNsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1580341289255-5b47c98a59dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW90b3JjeWNsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1591791423917-04af7edc8b0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdG9yY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1588925762549-c414056c4d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdG9yY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1481567758055-3e8a6e89ca58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vdG9yY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1vdG9yY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1568745812711-eb40c842c32d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG1vdG9yY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1525160354320-d8e92641c563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fG1vdG9yY3ljbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1571970949103-4e48dd9f2da7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fG1vdG9yY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1614189351157-a7a4629b65a4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fG1vdG9yY3ljbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1503980599186-9cc36eda351a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGhhbmt5b3V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    
    
];

var border = [
    "2px solid burlywood",
    "2px solid violet",
    "2px solid indigo",
    "2px solid blue",
    "2px solid green",
    "2px solid yellow",
    "2px solid red",
    "2px solid pink",
    "2px solid magenta",
    "2px solid white",
    "2px solid black",
    "2px solid cyan",
    "2px solid whitesmoke"
]

var a = 0;
img.src=images[a];
img.style.border=border[a];
function p(){
  a--;
  // imgg[a].classList.add('fade');
  if(a<0){
      a=images.length-1;
  }
  img.style.border=border[a];
  img.src=images[a];
  // img.classList.add('fade');
}

function n(){
  a++;
  // imgg[a].classList.add('fade');
  if(a>images.length-1){
      a=0;
  }
  img.style.border=border[a];
  img.src=images[a];
  // img.classList.add('fade');
  
}

function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock1").innerText = hour + ":" + min; 
    document.getElementById("clock2").innerText = sec;
    var t = setTimeout(function(){ currentTime() }, 0); 
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }

currentTime();
prev.addEventListener("click",p);
next.addEventListener("click",n);



