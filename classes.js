// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
  one()
  two()
  three()
  makeVisible()
    
  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we apply a new CSS class to it:
  one.classList.add('blue')
}

// CREATE FUNCTION two HERE
function two () {
  var two = document.getElementById('two')
  two.classList.add('green')
 }
// CREATE FUNCTION three HEREs
function three () {
  var three = document.getElementById('three')
  three.classList.add('red')
}
// CREATE FUNCTION makeVisible HERE
function makeVisible () {
  var invisibleElement = document.getElementsByClassName('invisible')[0]
  console.log(document.getElementsByClassName('invisible')[0])
  invisibleElement.classList.remove('invisible')
  invisibleElement.classList.add ('visible')
   // for (let i=0;i<invisible.length;i++) {
  // invisible[i].classList.remove("invisible") 
  // }
}

