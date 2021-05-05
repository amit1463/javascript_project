var btn = document.querySelector(".btn");
var search = document.querySelector(".search");
var input = document.querySelector(".input");


btn.addEventListener("click", ()=>{
    search.classList.toggle('active');
    input.focus();
})
