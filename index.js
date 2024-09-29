const numBtn = document.querySelectorAll('#num');
const ceBtn = document.querySelector('#CE');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('btnEqual');
const dotBtn = document.getElementById('dotBtn'); // Dot button
const operationBtn = document.querySelectorAll("#addition, #subtract, #multiplication, #divide");
const displayCurrent = document.getElementById('displayCurrent');
const displayPrevious = document.getElementById('displayPrevious');

let total = "";
let firstValue = null;
let secondValue = null;
let operator = "";
let dotUsed = false; 

numBtn.forEach(button => {
   button.addEventListener('click', () => {
      total += button.value;
      displayCurrent.innerText = total;

      if (operator === "") {
         firstValue = parseFloat(total);
      } else {
         secondValue = parseFloat(total);
      }
   });
});

dotBtn.addEventListener('click', () => {
   if (!dotUsed) {
      total += '.';
      displayCurrent.innerText = total;
      dotUsed = true
   }
});


operationBtn.forEach(button => {
   button.addEventListener('click', () => {
      operator = button.value;
      displayPrevious.innerText = firstValue + " " + operator;
      total = "";
      dotUsed = false;
   });
});

equalBtn.addEventListener('click', () => {
   let result = "";
   switch (operator) {
      case "+":
         result = firstValue + secondValue;
         break;
      case "-":
         result = firstValue - secondValue;
         break;
      case "*":
         result = firstValue * secondValue;
         break;
      case "/":
         result = firstValue / secondValue;
         break;
   }
   displayPrevious.innerText = "";
   displayCurrent.innerText = result;
   total = result.toString();
   firstValue = result;
   secondValue = null;
   dotUsed = total.includes('.');
});


ceBtn.addEventListener('click', () => {
   total = total.slice(0, -1);
   if (total.length === 0) {
      displayCurrent.innerText = "";
   } else {
      displayCurrent.innerText = total;
   }
});


clearBtn.addEventListener('click', () => {
   total = "";
   firstValue = 0;
   secondValue = 0;
   displayCurrent.innerText = "";
   displayPrevious.innerText = "";
   dotUsed = false;
});
