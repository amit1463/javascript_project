const text = document.querySelector("#text");

const btn = document.querySelector("#btn");

const img = document.querySelector("#img");

btn.addEventListener("click",()=>{
     text.innerHTML="Lol! Caught!!"
     text.style.color="red"
     img.style.backgroundImage="url('back.jpg')";
})
