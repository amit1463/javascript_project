const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");
const music = document.querySelector("audio");
const image = document.querySelector("img");
const artist = document.getElementById("artist");
const title = document.getElementById("title");

let progress = document.getElementById("progress");
let total_duration = document.getElementById("duration");
let curr_time = document.getElementById("current_time");
let progress_div = document.getElementById("progress_div");
let vol_up = document.getElementById("vol_up");
let vol_down = document.getElementById("vol_down");
let sound_bar = document.getElementById("sound_bar");
let sound_percent = document.getElementById("percent");
let display_sound = document.getElementById("display_sound");
let display_bar = document.getElementById("display_bar");
let repeatIcon = document.getElementById("rptimg");
let repeatTotal = document.getElementById("repeat");
let mute = document.getElementById("mute");
let volume_icon = document.getElementById("volume_icon");


// play/pause music functionality

// var isPlaying =false;

function playMusic(){
    // isPlaying=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    play.title="Pause";
    image.classList.add("anime");
}

function pauseMusic(){
    // isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    play.title="Play";
    image.classList.remove("anime");
}

// adding play/pause functionality

play.addEventListener("click",()=>{
    // isPlaying ? pauseMusic() : playMusic(); 
    // play.style.transform+='translateY(3px)';
    // play.style.transform="scale(1.1)";
    if(music.paused){
       playMusic();
    }
    else{
       pauseMusic();
    }
})

// array of objects which contains song and its info

const songs = [
    {
        name:"song1",
        img :"img1",
        title:"numb",
        artist:"linkin park",
        
    },
    {
        name:"song2",
        img :"img2",
        title:"faded",
        artist:"alan walker",
    },
    {
        name:"song3",
        img :"img3",
        title:"jai ho",
        artist:"a r rehman",
    },
    {
        name:"song4",
        img :"img4",
        title:"namo namo",
        artist:"amit trivedi",
    },
];

const changeSong = (song)=>{
    title.textContent = song.title;
    artist.textContent = song.artist;
    try{
        music.src = song.name + ".mp3";
    }catch(err){
        console.log("error");
    }
    
    image.src = song.img + ".jpg";
}

// normal mode on clicking prev next functionality

var index=0;
const prevNormalSong = () =>{
    index--;
    if(index<0){
        index=songs.length-1;
    }
    changeSong(songs[index]);
    if(music.paused){
        playMusic();
     }
     else{
        pauseMusic();
     }
}

const nextNormalSong = () =>{
    index++;
    if(index==songs.length){
        index=0;
    }
    changeSong(songs[index]);
    if(music.paused){
        playMusic();
     }
     else{
        pauseMusic();
     }
}

// repeat mode on clicking prev next functionality


const prevRepeatOneSong = () =>{
   music.currentTime = 0;
}

const nextRepeatOneSong = () =>{
    music.currentTime = 0;
    if(music.paused){
       music.play();
    } 
}

// random mode on clicking prev next functionality

const prevRandomSong = () =>{
    index = Math.floor(Math.random()*4);
    changeSong(songs[index]);
    if(music.paused){
        playMusic();
     }
     else{
        pauseMusic();
     }
}
const nextRandomSong = () =>{
    index = Math.floor(Math.random()*4);
    changeSong(songs[index]);
    if(music.paused){
        playMusic();
     }
     else{
        pauseMusic();
     }
}

//modes changing like repeat/repeat one/shuffle to the playlist functionality

var chooseIndex=0;
function chooseMode(){
   if(chooseIndex==0){
      repeatIcon.src="repeat1.jpg";
      chooseIndex=1;
      prev.removeEventListener("click",prevNormalSong);
      next.removeEventListener("click",nextNormalSong);
      prev.addEventListener("click",prevRepeatOneSong);
      next.addEventListener("click",nextRepeatOneSong);
      music.removeEventListener('ended',nextNormalSong);
      music.addEventListener('ended',nextRepeatOneSong);
      curr_time.innerHTML=`0:00`;
   }
   else if(chooseIndex==1){
      repeatIcon.src="random.jpg";
      chooseIndex=2;
      prev.removeEventListener("click",prevRepeatOneSong);
      next.removeEventListener("click",nextRepeatOneSong);
      prev.addEventListener("click",prevRandomSong);
      next.addEventListener("click",nextRandomSong);
      music.removeEventListener('ended',nextRepeatOneSong);
      music.addEventListener('ended',nextRandomSong); 
   }
   else
   {
    repeatIcon.src="repeat.jpg"
    chooseIndex=0;
    prev.removeEventListener("click",prevRandomSong);
    next.removeEventListener("click",nextRandomSong);
    prev.addEventListener("click",prevNormalSong);
    next.addEventListener("click",nextNormalSong);
    music.removeEventListener('ended',nextRandomSong);
    music.addEventListener('ended',nextNormalSong);
   }
   console.log(chooseIndex);
}
console.log(chooseIndex);



// progress bar

music.addEventListener('timeupdate',() =>{
//    console.log(event);
// const { currentTime , duration } = event.currentTarget;
const current_Time = music.currentTime;  
const music_duration = music.duration;  
// const currentTime = event.currentTarget;
// const duration = event.currentTarget;
// console.log(music_duration);
// console.log(current_Time);


let progress_time = (current_Time/music_duration) * 100;
progress.style.width = `${progress_time}%`;

// music duration update

let min_duration = Math.floor(music_duration/60);
let sec_duration = Math.floor(music_duration%60);

if(sec_duration<10){
    sec_duration=`0${sec_duration}`;
}

let tot_duration = `${min_duration}:${sec_duration}`;
if(music_duration){
    total_duration.textContent = `${tot_duration}`;
}

//current duration update

let min_currentTime = Math.floor(current_Time/60);
let sec_currentTime = Math.floor(current_Time%60);

if(sec_currentTime<10){
    sec_currentTime=`0${sec_currentTime}`;
}

let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
if(current_Time){
    curr_time.innerText = tot_currentTime;
}

});


// progress bar onclick functionality 

progress_div.addEventListener('click', (e)=>{
//    console.log(event);
//    const { duration } = music;
   const music_duration = music.duration;  
   let move_progress = ( e.offsetX / progress_div.offsetWidth ) * music_duration;
//    console.log(move_progress);
   music.currentTime = move_progress;

});

// volume button functionality of decreasing/increasing sound

music.volume = 0.2;
console.log(typeof(music.volume)); 
function volumeUp(){
    if(music.volume!=1){
        volume_icon.classList.replace("fa-volume-off","fa-volume-up");
        try{
            music.volume += 0.1;
            display_bar.style.opacity=`${music.volume}`;
            vol_up.title="Volume Up";
        }
        catch(err){
            music.volume = 1;
            vol_up.title="Maximum Volume";
        }
    }
    console.log(music.volume);
}

let volumeDown = function(){
    if(music.volume>0){
        try{
            music.volume -= 0.1;
            display_bar.style.opacity=`${music.volume}`;
            
        }
        catch(err){
            music.volume = 0;
        }
    }
    if(music.volume<0.1){
        volume_icon.classList.replace("fa-volume-up","fa-volume-off");
        volume_icon.title="Mute";
        mute.addEventListener("click",()=>{
            volume_icon.classList.replace("fa-volume-off","fa-volume-mute"); 
        })
    }
    else{
        volume_icon.classList.replace("fa-volume-off","fa-volume-up");
    }
    console.log(music.volume);
 }

//  show volume bar functionality

const show_volbar = ()=>{
    display_sound.style.display="flex";
    let show=Math.floor((music.volume)*100);
    // if(show==89 || show==99){
    //     show+=1;
    // }
    sound_percent.textContent = show+"%";
    sound_bar.style.height = `${(1-music.volume)*100}%`;
   
}

const remove_volbar = () =>{
    display_sound.style.display="none";
}

// adding sound bar

var i=0;
var a1,a2;
vol_up.addEventListener("click",()=>{
    volumeUp();
     // sound bar remains for 2s after clicking on it functionality
    show_volbar();
    if(i==1){
        clearTimeout(a1);
        a2=setTimeout(remove_volbar,2000);
        i=0;
    }
    else{
        clearTimeout(a2);
        a1=setTimeout(remove_volbar,2000);
        i=1;
    }  
});

vol_down.addEventListener("click",()=>{
    volumeDown();
    // sound bar remains for 2s after clicking on it functionality
    show_volbar();
    if(i==1){
        clearTimeout(a1);
        a2=setTimeout(remove_volbar,2000);
        i=0;
    }
    else{
        clearTimeout(a2);
        a1=setTimeout(remove_volbar,2000);
        i=1;
    }  
});

// adding title functionality to the volume button

vol_up.addEventListener("mouseover",()=>{
    if(music.volume>0.9){
        vol_up.title = "Maximum Volume";
    }
    else{
        vol_up.title="Volume Up";
    }
    
});

vol_down.addEventListener("mouseover",()=>{
    if(music.volume<0.1){
        vol_down.title = "Minimum Volume";
    }
    else{
        vol_down.title="Volume Down";
    }
    
});

// adding mute functionality to the mute/sound icon

let isMuted = false;
mute.addEventListener("click",()=>{
    if(isMuted==false){
        music.muted = true;
        volume_icon.classList.replace("fa-volume-up","fa-volume-mute");
        volume_icon.title="Unmute";
        isMuted = true;
    }
    else{
        music.muted = false;
        volume_icon.classList.replace("fa-volume-mute","fa-volume-up");
        volume_icon.title="Mute";
        isMuted = false;
    }
    
})

// adding starting next prev on click

prev.addEventListener("click",prevNormalSong);
next.addEventListener("click",nextNormalSong);

// adding modes
repeatTotal.addEventListener("click",chooseMode);












