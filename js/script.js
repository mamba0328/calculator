/*
1.Buttons need return values that will be stored in the variable.
2.Somehow manage to solve the operators problem. 
3.Add text.content to the screen div.
*/

//DOM section 

const bottomButtons = document.querySelector('#numberButtons'); //takes a div with the number buttons
const numberButton = bottomButtons.querySelectorAll('button') //takes each button from that div

numberButton.forEach((button) => { 
 button.addEventListener('click', (e) => {
     console.log(e.target.id)
     return e.target.id
 })
})
