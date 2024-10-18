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
