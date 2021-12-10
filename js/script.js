/*
1.Buttons need return values that will be stored in the variable.
2.Somehow manage to solve the operators problem. 
3.Add text.content to the screen div.
*/


//Returns a value of the numberbutton on event

const bottomButtons = document.querySelector('#numberButtons'); //takes a div with the number buttons
const numberButton = bottomButtons.querySelectorAll('button') //takes each button from that div
const screen = document.getElementById('screen')
const button1 = document.querySelector('#dot')

let valueOnScreen = '';  

numberButton.forEach((button) => { 
 button.addEventListener('click', function() {
     valueOnScreen += button.id;
     screen.innerText = valueOnScreen;
     return valueOnScreen
 });
});

//reset button which clears the screen and variable
const MC = document.getElementById('MC'); 
MC.addEventListener('click', () => { 
    valueOnScreen = ''; 
    screen.innerText = '';
});

//change to negativ or positive num
const neg = document.getElementById('negative'); 
neg.addEventListener('click', () => { 

    if (typeof(valueOnScreen) === 'string') {
        if (valueOnScreen.includes('-')) { 
         valueOnScreen = valueOnScreen.replace('-','');
        } else { 
          valueOnScreen = '-' + valueOnScreen;
     }
    }
    screen.innerText = valueOnScreen;

});

//changes input value to percantages 
const percentage = document.getElementById('percentage');
percentage.addEventListener('click', () => { 
    valueOnScreen = parseInt(valueOnScreen)/100; 
    valueOnScreen = valueOnScreen.toString();
    screen.innerText = valueOnScreen;
});
