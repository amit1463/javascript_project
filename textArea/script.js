const text=document.getElementById("text-area");
const show=document.querySelector(".show");
const counter=document.getElementById("counter");




text.style.boxShadow="1px 1px green";
text.style.border="1px solid green";
function textCounter(){
    var count=text.value.length;
    var maxLength=100;
    var half=50;
    var warning=80;
    counter.innerText=count;
    var a;
    if(count==0){
        show.innerHTML="";
        return;
    }
    if(count>=half && count<warning){
        counter.style.color="#cdc7be";
    }

    if(count>=warning){
    //    text=text.value.substring(0,20);
    //    a=setTimeout(function(){
    //        text.focus();
    //    },0)
       counter.style.color="rgb(224, 169, 96)";
       counter.style.textShadow="3px 3px 4px grey";
    } 
    if(count<half){
        // clearTimeout(a);
       counter.style.color="black";
    }
      
    
    show.innerHTML=(maxLength-count)+ " characters left";
    show.style.color="rgb(23, 207, 152)";
    if(count>=100){
        show.innerHTML="U cannot write more characters";
        show.style.color="darkred";
        show.style.fontSize="40px"
        // show.style.textShadow="wheat"
        //text.value=text.value.substring(0,20);
    }
    
    // show.innerHTML=count + 20-count;

}

function focuss(){
    var count1=text.value.length;
    var half=50;
    var warning=80;
    
    if(count1==0){
        text.style.border="1px solid red";
        text.style.boxShadow="1px 1px red";
    }
    if(count1>=half && count1<warning){
        text.style.border="1px solid blue";
        text.style.boxShadow="1px 1px blue";
    }

    if(count1>=warning){
    text.style.border="1px solid red";
    text.style.boxShadow="1px 1px red";
    } 
    if(count1!=0 && count1<half){
        text.style.boxShadow="1px 1px green";
        text.style.border="1px solid green";
    }

}

// function textCounter1(){
//     textCounter.prototype.count=text.value.length-1;
// }

// text.addEventListener("change",textCounter);
text.addEventListener("keydown",textCounter);
text.addEventListener("keyup",textCounter);
text.addEventListener("change",focuss);
text.addEventListener("keyup",focuss);
text.addEventListener("keydown",focuss)

