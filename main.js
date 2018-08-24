var answer = document.querySelector('h1[name="top_answer"]'); // Sets variable answer equal to the h1 heading with the name "top_answer"
var arraylength = document.querySelectorAll('button'); // Sets variable arraylength equal to all the buttons in the document
var placeholder = ''; // Creates a placeholder for math functions to be saved
var placeholdertwo = ''; // Creates a second placeholder for math functions to be saved
var lastOperator = { // Creates a way to use variables as operators so you can properly display answers after clicking the equals sign and there is still one last bit of math left to do
    '+': function(a, b) { return a + b },
    '*': function(a, b) { return a * b },
    '/': function(a, b) { return a / b },
    '-': function(a, b) { return a - b },
};
var op = ''; // Declares the second portion of the op variable

// Loops through all the buttons saved in the variable arraylength and adds click event listeners to run the calculate funtion or math function listed below
for (var i = 0; i < arraylength.length; i++) {
  if (isNaN(arraylength[i].textContent)) {
    arraylength[i].addEventListener('click', calculate)
  }else {
    arraylength[i].addEventListener('click', math)
  }
}

function math(){ // If the answer box is equal to zero, set it equal to a number besides zero that is selected by the user

  if (answer.textContent == 0) {
    answer.textContent = this.textContent
  }else{
    answer.textContent += this.textContent
}
}

function calculate(){ // Calculate functions

  if (this.textContent == 'C') { // Clears the screen and placeholders
    placeholder = ''
    placeholdertwo = ''
    answer.textContent = '0'
  }

  if (this.textContent == '+'){ // If the plus button is clicked, add the placeholders together but first check to see if they are not empty
    op = '+'
    if (placeholder == '') {
      placeholder = parseInt(answer.textContent)
      answer.textContent = ''
    }else if (placeholder != '') {
      placeholdertwo = placeholder + parseInt(answer.textContent)
      answer.textContent = ''
    }
}

if (this.textContent == '-'){ // If the minus button is clicked, subtract the placeholders from themselves but first check to see if they are not empty
  op = '-'
  if (placeholder == '') {
    placeholder = parseInt(answer.textContent)
    answer.textContent = ''
  }else if (placeholder != '') {
    placeholdertwo = placeholder - parseInt(answer.textContent)
    answer.textContent = ''
  }
}

if (this.textContent == 'x'){ // If the multiply button is clicked, multiply the placeholders together but first check to see if they are not empty
  op = '*'
  if (placeholder == '') {
    placeholder = parseInt(answer.textContent)
    answer.textContent = ''
  }else if (placeholder != '') {
    placeholdertwo = placeholder * parseInt(answer.textContent)
    answer.textContent = ''
  }
}

if (this.textContent == '/'){ // If the divide button is clicked, divide the placeholders into themselves but first check to see if they are not empty
  op = '/'
  if (placeholder == '') {
    placeholder = parseInt(answer.textContent)
    answer.textContent = ''
  }else if (placeholder != '') {
    placeholdertwo = placeholder / parseInt(answer.textContent)
    answer.textContent = ''
  }
}

  if (this.textContent == '=' && op != '' && op != '=' && answer.textContent != '') { // If the euqals button is clicked, and the operator is not empty as well as it isn't equal to itself and the answer field is not empty run the code through the operator
    if (placeholdertwo == ''){
    placeholdertwo = lastOperator[op](placeholder, parseInt(answer.textContent))
    answer.textContent = placeholdertwo
  }else {
    placeholdertwo = lastOperator[op](placeholdertwo, parseInt(answer.textContent))
    answer.textContent = placeholdertwo
  }
  placeholder = ''
  placeholdertwo = ''
  op = '='
  }
}
