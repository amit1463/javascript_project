let text = document.querySelector(".text");
let author = document.querySelector(".author");

let i=0;
function quoteGenerator(){
    let file = "https://type.fit/api/quotes";
    fetch(file)
    .then(response => {
        return response.json();
    })
    .then(data=>{   
        if(i==data.length){
            i=0;
        }
        text.innerHTML = data[i].text;
        author.innerHTML = data[i].author;
        i++;
    });
}

setInterval(quoteGenerator,4000);
