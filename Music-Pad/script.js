let musicPad = document.getElementById("music-pad");
let colors = ["red","green","crimson","peru","violet","blue","indigo","orange","aqua"];
for(var i = 0;i<9;i++){
    let square = document.createElement('div');
    let audio = document.createElement('audio');
    audio.src="music-"+(i+1)+".mp3";
    square.appendChild(audio);
    square.classList.add('square');
    square.style.background = `${colors[i]}`;
    square.addEventListener("click",()=>audio.play());   
    musicPad.appendChild(square);
}
// var allaudio = document.querySelectorAll(".square audio");
// function reset(){
//     allaudio.forEach(e =>{
//         if(e.play()){
//             e.pause();
//         }  
// })
// }

