const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById("clear-btn");

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;


function sendNumberValue(number){
    //replace current display value if first value is entered
    if(awaitingNextValue){
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    }else{
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
}
 
function addDecimal(){
    //if operator pressed don't add decimal
    if(awaitingNextValue) return; 
    //if no decimal , add one
    if(!calculatorDisplay.textContent.includes('.')){
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`
    }
}

//Calculate first and second value depending on operator

    const calculate = {
        '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
        '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
        '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
        '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
        '=':(firstNumber, secondNumber) => secondNumber
    };


function useOperator(operator){
    const currentValue = Number(calculatorDisplay.textContent);
    //Prevent multiple operators
    if(operatorValue && awaitingNextValue) {
        operatorValue = operator;
        return;
    }
    
    //assign first value if no value
    if(!firstValue){
        firstValue = currentValue;
    }else{
        const calculation = calculate[operatorValue](firstValue, currentValue);
        calculatorDisplay.textContent = calculation;
        firstValue = calculation;
    }

    //Ready for the next value , store operator
    awaitingNextValue = true;
    operatorValue = operator;
}
 //add event listener for num operator decimal btn

 inputBtns.forEach((inputBtn) => {
     if(inputBtn.classList.length === 0){
         inputBtn.addEventListener("click", () => sendNumberValue(inputBtn.value));
     }else if(inputBtn.classList.contains('operator')){
         inputBtn.addEventListener("click", () => useOperator(inputBtn.value));
     }else if(inputBtn.classList.contains('decimal')){
         inputBtn.addEventListener("click", () => addDecimal());
     }
 });

 //reset display

 function resetAll(){
    firstValue = 0;
     operatorValue = '';
     awaitingNextValue = false;
     calculatorDisplay.textContent = '0';
 }

 //Event Listener 

 clearBtn.addEventListener("click", resetAll);

