var userInput;
// Function to display an alert on load
function takeInput() {

    userInput = prompt('Please enter your name:');
    saveUserName();
}


function saveUserName() {
    let username = document.querySelector('#user')
    username.innerHTML = userInput || "user 007";
}

// Function to add shadow to the button for 1 second

function redEffect() {
    let button = document.getElementById('red');

    // Add a class to apply the shadow style
    button.classList.add('shadow1');

    // Remove the class after a delay (1000 milliseconds = 1 second)
    setTimeout(function () {
        button.classList.remove('shadow1');
    }, 500);

    var music = document.querySelector('#red-music')
    music.play()
}


function blueEffect() {
    let button = document.getElementById('blue');

    // Add a class to apply the shadow style
    button.classList.add('shadow3');

    // Remove the class after a delay (1000 milliseconds = 1 second)
    setTimeout(function () {
        button.classList.remove('shadow3');
    }, 500);

    var music = document.querySelector('#blue-music')
    music.play()
}



function greenEffect() {
    let button = document.getElementById('green');

    // Add a class to apply the shadow style
    button.classList.add('shadow2');

    // Remove the class after a delay (1000 milliseconds = 1 second)
    setTimeout(function () {
        button.classList.remove('shadow2');
    }, 500);

    var music = document.querySelector('#green-music')
    music.play()
}

function forEffect() {
    red.addEventListener('click', redEffect);
    green.addEventListener('click', greenEffect);
    blue.addEventListener('click', blueEffect);
    yellow.addEventListener('click', yellowEffect);
}


function yellowEffect() {
    let button = document.getElementById('yellow');

    // Add a class to apply the shadow style
    button.classList.add('shadow4');

    // Remove the class after a delay (1000 milliseconds = 1 second)
    setTimeout(function () {
        button.classList.remove('shadow4');
    }, 500);

    var music = document.querySelector('#yellow-music')
    music.play()
}


let botarr = []
let colArr = document.querySelectorAll('.circle');
var red = document.querySelector('#red')
var blue = document.querySelector('#blue')
var yellow = document.querySelector('#yellow')
var green = document.querySelector('#green')


let shiningItemIndex;

function startGame() {
    resetItems();
    setTimeout(shineRandomItem, 1000);

}

function resetItems() {
    colArr.forEach(colArr => colArr.classList.remove('shining'));
}

function shineRandomItem() {
    resetItems();
    shiningItemIndex = Math.floor(Math.random() * colArr.length);
    colArr[shiningItemIndex].classList.add('shining');
    setTimeout(resetItems, 5000);
}

function checkClick(clickedItem) {
    const clickedIndex = Array.from(colArr).indexOf(clickedItem);
    if (clickedIndex === shiningItemIndex) {
        alert("Correct! You clicked the shining item.");
        shineRandomItem();
        console.log(checkClick)
    } else {
        alert("Wrong! Game over. Try again.");
        startGame();
    }
}

// Start the game when the page loads
window.onload = function () {

    takeInput();
};