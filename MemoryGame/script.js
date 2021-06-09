  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  const lastDisplay = document.querySelector('.container h2');
  const timediv = document.querySelector('.timediv');
  const time = document.querySelector('.time');
  const showAtLast = document.querySelector('.showAtLast');
  const gameover = document.querySelector('.showAtLast h1');
  const show = document.querySelector('.show');
  const won = document.querySelector('.won');
  const start = document.querySelector('.start');
  const btn = document.querySelector('.start .btn');
  const res = document.querySelector('.res');

 btn.addEventListener("click",()=>{
     start.style.display="none";
     createBoard();
     timeRemain();
 })



let timeout;

 let t = 10;
 const timeRemain = ()=>{
    
    if(t==-1){
        showAtLast.style.display = "flex";
        res.textContent=cardsWon.length;
    }
    else if(t==-2){
        gameover.style.fontSize = "100px";
        clearTimeout(timeout);
        return;
    }
    else{
        time.innerText = t;
        if(t<=20){
        time.style.color="red";
    }
    }
   t--;
   timeout = setTimeout(timeRemain,1000);   
 }

 


 const cardArray = [
          {
            name: 'apple',
            img: './image/apple.jpg'
          },
          {
            name: 'banana',
            img: './image/banana.jpg'
          },
          {
            name: 'mango',
            img: './image/mango.jpg'
          },
          {
            name: 'kiwi',
            img: './image/kiwi.jpg'
          },
          {
            name: 'orange',
            img: './image/orange.jpg'
          },
          {
            name: 'lichi',
            img: './image/lichi.jpg'
          },
            {
            name: 'apple',
            img: './image/apple.jpg'
          },
          {
            name: 'banana',
            img: './image/banana.jpg'
          },
          {
            name: 'mango',
            img: './image/mango.jpg'
          },
          {
            name: 'kiwi',
            img: './image/kiwi.jpg'
          },
          {
            name: 'orange',
            img: './image/orange.jpg'
          },
          {
            name: 'lichi',
            img: './image/lichi.jpg'
          }
          
        ]
    

    cardArray.sort(() => 0.5 - Math.random());


  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', './image/clickonme.jpg');
      card.setAttribute('data-id', i)
      card.setAttribute('id',"imgg");
      card.addEventListener('click', flipCard)
      card.style.border = "1px solid grey"
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', './image/clickonme.jpg')
      cards[optionTwoId].setAttribute('src', './image/clickonme.jpg')
      
      show.innerText= 'you have clicked the same image again';
      show.style.color="red";
      setTimeout(()=>{
      show.style.color="black";
      show.innerText= '';
      },1500) 
      
      
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
     show.innerText= 'You Found a Match';
     show.style.color="darkgreen";
      setTimeout(()=>{
        show.style.color="black";
        show.innerText= '';
      },1500) 
      cards[optionOneId].setAttribute('src', './image/white.png')
      cards[optionTwoId].setAttribute('src', './image/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', './image/clickonme.jpg')
      cards[optionTwoId].setAttribute('src', './image/clickonme.jpg')
      show.innerText= 'Sorry Try Again';
      setTimeout(()=>{
        show.innerText= '';
      },1000) 
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length;
    if  (cardsWon.length === cardArray.length/2) {
      lastDisplay.textContent = 'Congratulations! You found them all!'
      clearTimeout(timeout);
      setTimeout(()=>{
          won.style.display="flex";
          won.style.color = "darkgreen";
      },700)
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }


