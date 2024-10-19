# projects related to DOM

## project link

[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html) 

# Solution Code

## project 1
```javascript
console.log("Sakshi")

const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);

    switch(e.target.id)
    {
      case 'grey':{
          body.style.backgroundColor=e.target.id;
          break;
        }
      
      case 'yellow':{
        body.style.backgroundColor=e.target.id;
        break;
      }

      case 'white':{
        body.style.backgroundColor=e.target.id;
        break;
      }

      case 'blue':{
        body.style.backgroundColor=e.target.id;
        break;
      }
      case 'purple':{
        body.style.backgroundColor=e.target.id;
        break;
      }
    }
  })
})

```
# project 2

const form = document.querySelector('form');
//This use case will give you empty value
// const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${BMI}</span>`;

    const final = document.querySelector('#final-wgt');

    if (BMI <= 18.6) {
      final.innerHTML = `<div>Underweight</div>`;
    } else if (BMI > 18.6 && BMI <= 24.9) {
      final.innerHTML = `<div>Normal</div>`;
    } else {
      final.innerHTML = `<div>Overweight</div>`;
    }
  }
});


# Digital clock

const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML=date.toLocaleTimeString();
}, 1000);

```

## Guess the number

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi'); //to check if the guess made by the user is lower or higher than the randomly generated number
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []; //guesses made by the player are being pushed into this array
let numGuess = 1; //track of the number of guesses made

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
