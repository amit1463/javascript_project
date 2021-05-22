let input = document.getElementById("input");
let show = document.getElementById("show");
let btn =document.getElementById("btn");
let editor = document.getElementById("editor");
let submit = document.getElementById("btn2");
let canEdit = document.getElementById("can-edit");
let body = document.querySelector("body");
// var i=0;
// "use strict";
// let para;
let index;
btn.addEventListener("click", ()=> {
    let para= document.createElement("div");
    para.setAttribute("id","para");

    let textAtPara= document.createElement("div");
    textAtPara.setAttribute("id","textAtPara");
    para.appendChild(textAtPara);
    textAtPara.textContent=input.value;

    let edit = document.createElement("div");
    edit.innerHTML = `<i class="fas fa-pen"></i>`;
    edit.setAttribute("id","edit");

    let cross = document.createElement("div");
    cross.innerHTML=`<i class="fas fa-trash-alt"></i>`;
    cross.setAttribute("id","cross");
    // var fadit =document.querySelector(".fa-edit");
    // let facross =document.querySelector(".fa-times-circle");
    let editDelete = document.createElement("div");
    editDelete.setAttribute("id","editDelete");

             
    editDelete.appendChild(edit);
    editDelete.appendChild(cross);

    para.appendChild(editDelete);
        
    if(input.value!=""){
        show.appendChild(para);
    }
    else{
        alert('Insert some text');
    }
    input.value="";
    textAtPara.addEventListener('click',()=>textAtPara.style.textDecoration="line-through");
    // let index = Array.prototype.indexOf.call(show.children,para);
    cross.addEventListener('click',()=>show.removeChild(para));
    
    edit.addEventListener('click',()=>{
        canEdit.value = textAtPara.textContent;
        editor.style.display = "flex";
        index = Array.prototype.indexOf.call(show.children,para);
        editor.style.background = "rgba(0,0,0,0.7)"; 
        textAtPara.style.textDecoration="none";
    })

    submit.addEventListener('click',()=>{
        // para.textContent = canEdit.textContent;
        // textAtPara.textContent = canEdit.value;
        show.childNodes[index].firstChild.textContent = canEdit.value;   
        editor.style.display = "none";
    })
    
    // para.addEventListener("dblclick",()=>{
    //     var index = Array.prototype.indexOf.call(show.children,para);
    //     show.removeChild(show.childNodes[index]);
        
    // })

})



// submit.addEventListener('click',()=>{
//     para.textContent = canEdit.textContent;
//     canEdit.textContent="";
//     editor.style.display = "none";
// })


