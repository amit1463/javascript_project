var input = document.getElementById("input");
var show = document.getElementById("show");
var btn =document.getElementById("btn");

// var i=0;
btn.addEventListener("click", ()=> {
    var para= document.createElement("p");
    para.setAttribute("id","para");
    para.innerText=input.value;

    if(input.value!=""){
        show.appendChild(para);
    }
    else{
        alert('Insert some text');
    }
    // input.value="";
    para.addEventListener('click',removePara);
    
    var i=0;
    function removePara(){
        i++;
        if(i==1){
            para.style.textDecoration ="line-through";
        }
        else if(i==2){
            var index = Array.prototype.indexOf.call(show.children,para);
            show.removeChild(show.childNodes[index]);
        }
      
    } 
    // para.addEventListener("dblclick",()=>{
    //     var index = Array.prototype.indexOf.call(show.children,para);
    //     show.removeChild(show.childNodes[index]);
        
    // })

})


