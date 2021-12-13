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
let variants = '';  // this variable help to use operators

let valueOnScreen = '';  
let nextValue = ''; //value witch will be called with an operators 

numberButton.forEach((button) => { 
 button.addEventListener('click', function() {
     if (valueOnScreen.length > 10) {  //set max amount of operatable characters
        return
      } 
     valueOnScreen += button.id;
     screen.innerText = valueOnScreen;
 });
});

let zero = document.getElementById('0'); 
zero.addEventListener('click', () => { 
    if (valueOnScreen.length > 10) {  //set max amount of operatable characters
        return
      } 
    valueOnScreen += '0';  
    screen.innerText = valueOnScreen;
})

// add a dot to make operations over decimals 
let dot = document.getElementById('.')
dot.addEventListener('click', () => {
    if (valueOnScreen.includes('.')) { 
        valueOnScreen = valueOnScreen.replace('.','');
        screen.innerText = valueOnScreen;
    } else { 
        valueOnScreen += dot.id;
        screen.innerText = valueOnScreen;
    }
})

//reset button which clears the screen and variable
const MC = document.getElementById('MC'); 
MC.addEventListener('click', () => { 
    valueOnScreen = ''; 
    screen.innerText = '';
    nextValue = '';
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
    if (variants !='') { 
        variants = '';
        valueOnScreen = nextValue;
    } 

    valueOnScreen = parseFloat(valueOnScreen)/100; 
    valueOnScreen = valueOnScreen.toString();
    screen.innerText = valueOnScreen;
});

//backspace button 
const backspace = document.getElementById('backspace');

backspace.addEventListener('click', () => {
  valueOnScreen = valueOnScreen.substr(0, valueOnScreen.length-1);
  screen.innerText = valueOnScreen;
});

//making operatorButtons functional
//evry time when you click on operator, variants variable
//changes to be cheked later to apply a function

const addition = document.getElementById('plus'); 

addition.addEventListener('click', () => { 
    nextValue = parseFloat(valueOnScreen);
    valueOnScreen = ''; 
    variants = '+';
    screen.innerText = nextValue;
})


const minus = document.getElementById('minus'); 

minus.addEventListener('click', () => { 
    nextValue = parseFloat(valueOnScreen);
    valueOnScreen = ''; 
    variants = '-';
    screen.innerText = nextValue;
})

const muliply = document.getElementById('muliply'); 

muliply.addEventListener('click', () => { 
    nextValue = parseFloat(valueOnScreen);
    valueOnScreen = ''; 
    variants = '*';
    screen.innerText = nextValue;
})

const division = document.getElementById('division'); 

division.addEventListener('click', () => { 
    nextValue = parseFloat(valueOnScreen);
    valueOnScreen = ''; 
    variants = '/';
    screen.innerText = nextValue;
})

const equal = document.getElementById('equal') 
equal.addEventListener('click', equality)

function equality() { 
    if (variants === '+') { 
        valueOnScreen = parseFloat(valueOnScreen) + nextValue; 
        variants = '';
    }
    if (variants === '-') { 
        valueOnScreen = nextValue - parseFloat(valueOnScreen); 
        variants = '';
    }
    if (variants === '*') { 
        valueOnScreen = parseFloat(valueOnScreen) * nextValue;
        variants = ''; 
    }
    if (variants === '/') { 
        if (valueOnScreen === 0) { 
            valueOnScreen= 'INFINITY' 
        } else { 
            valueOnScreen =  nextValue/parseFloat(valueOnScreen); 
        }
        
        variants = '';
    }

    valueOnScreen = valueOnScreen.toString();

    if(valueOnScreen.length>15) { 
        valueOnScreen = 'INT IS 2 LONG'
    }

    screen.innerText = valueOnScreen;
}

//adding keyboard support
document.addEventListener('keydown', function(e) {
    console.log(e.code)
    if (event.code == 'Digit0') { 
        if (valueOnScreen.length > 10) {  
          } 
        valueOnScreen += '0';
         screen.innerText = valueOnScreen;
    }
    if (event.code == 'Digit1') { 
        if (valueOnScreen.length > 10) {  
            return
          } 
        valueOnScreen += '1';
         screen.innerText = valueOnScreen;
    }
    if (event.code == 'Digit2') { 
        if (valueOnScreen.length > 10) {  
            return
          } 
        valueOnScreen += '2';
         screen.innerText = valueOnScreen;
    }
    if (event.code == 'Digit3') { 
        if (valueOnScreen.length > 10) {  
            return
          } 
        valueOnScreen += '3';
         screen.innerText = valueOnScreen;
    }
    if (event.code == 'Digit4') { 
        if (valueOnScreen.length > 10) {  
            return
          } 
        valueOnScreen += '4';
         screen.innerText = valueOnScreen;
    }
    if (event.code == 'Digit5') { 
        if (valueOnScreen.length > 10) {  
            return
          } 
        valueOnScreen += '5';
         screen.innerText = valueOnScreen;
    }
    if (event.code == 'Digit6') { 
        if (valueOnScreen.length > 10) {  
            return
          } 
        valueOnScreen += '6';
         screen.innerText = valueOnScreen;
    }
    if (event.code == 'Digit7') { 
        if (valueOnScreen.length > 10) {  
            return
          } 
        valueOnScreen += '7';
         screen.innerText = valueOnScreen;
    }
    if (event.code == 'Digit8') { 
        if (valueOnScreen.length > 10) {  
            return
          } 
        valueOnScreen += '8';
         screen.innerText = valueOnScreen;
    }
    if (event.code == 'Digit9') { 
        if (valueOnScreen.length > 10) {  
            return
          } 
        valueOnScreen += '9';
         screen.innerText = valueOnScreen;
    }
    if (event.code == 'Numpad0') { 
        if (valueOnScreen.length > 10) {  
            return
          } 
        valueOnScreen += '0';
         screen.innerText = valueOnScreen;
    }
    if (event.code == 'Numpad1') { 
        if (valueOnScreen.length > 10) {  
            return
          } 
        valueOnScreen += '1';
         screen.innerText = valueOnScreen;
    }
    if (event.code == 'Numpad2') { 
        if (valueOnScreen.length > 10) {  
            return
          } 
        valueOnScreen += '2';
         screen.innerText = valueOnScreen;
    }
    if (event.code == 'Numpad3') { 
        if (valueOnScreen.length > 10) {  
            return
          } 
        valueOnScreen += '3';
         screen.innerText = valueOnScreen;
    }
    if (event.code == 'Numpad4') { 
        if (valueOnScreen.length > 10) {  
            return
          } 
        valueOnScreen += '4';
         screen.innerText = valueOnScreen;
    }
    if (event.code == 'Numpad5') { 
        if (valueOnScreen.length > 10) {  
            return
          } 
        valueOnScreen += '5';
         screen.innerText = valueOnScreen;
    }
    if (event.code == 'Numpad6') {
        if (valueOnScreen.length > 10) {  
            return
          }  
        valueOnScreen += '6';
         screen.innerText = valueOnScreen;
    }
    if (event.code == 'Numpad7') { 
        if (valueOnScreen.length > 10) {  
            return
          } 
        valueOnScreen += '7';
         screen.innerText = valueOnScreen;
    }
    if (event.code == 'Numpad8') { 
        if (valueOnScreen.length > 10) {  
            return
          } 
        valueOnScreen += '8';
         screen.innerText = valueOnScreen;
    }
    if (event.code == 'Numpad9') { 
        if (valueOnScreen.length > 10) {  
            return
          } 
        valueOnScreen += '9';
         screen.innerText = valueOnScreen;
    }
    if (event.code == 'Backspace') { 
        valueOnScreen = valueOnScreen.substr(0, valueOnScreen.length-1);
        screen.innerText = valueOnScreen;
    }
    if (event.code == 'NumpadDecimal') { 
        if (valueOnScreen.includes('.')) { 
            valueOnScreen = valueOnScreen.replace('.','');
            screen.innerText = valueOnScreen;
        } else { 
            valueOnScreen += dot.id;
            screen.innerText = valueOnScreen;
        }
    }

    if (event.code == 'Slash') { 
        if (valueOnScreen.includes('.')) { 
            valueOnScreen = valueOnScreen.replace('.','');
            screen.innerText = valueOnScreen;
        } else { 
            valueOnScreen += dot.id;
            screen.innerText = valueOnScreen;
        }
    }

    if (event.code == 'NumpadAdd') { 
        nextValue = parseFloat(valueOnScreen);
        valueOnScreen = ''; 
        variants = '+';
        screen.innerText = nextValue;
    }
    if (event.code == 'NumpadSubtract') { 
        nextValue = parseFloat(valueOnScreen);
        valueOnScreen = ''; 
        variants = '-';
        screen.innerText = nextValue;
    }
    if (event.code == 'NumpadMultiply') { 
        nextValue = parseFloat(valueOnScreen);
        valueOnScreen = ''; 
        variants = '*';
        screen.innerText = nextValue;
    }
    if (event.code == 'NumpadDivide') { 
        nextValue = parseFloat(valueOnScreen);
        valueOnScreen = ''; 
        variants = '/';
        screen.innerText = nextValue;
    }

    if (event.code == 'Minus') { 
        nextValue = parseFloat(valueOnScreen);
        valueOnScreen = ''; 
        variants = '-';
        screen.innerText = nextValue;
    }
    if (event.code == 'Backslash') { 
        nextValue = parseFloat(valueOnScreen);
        valueOnScreen = ''; 
        variants = '/';
        screen.innerText = nextValue;
    }
    if (event.code == 'Equal') { 
        equality()
    }
    if (event.code == 'NumpadEnter') { 
        equality()
    }
    });