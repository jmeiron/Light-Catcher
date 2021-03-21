let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let ten = document.getElementById('ten');
let eleven = document.getElementById('eleven');
let twelve = document.getElementById('twelve');
let notSeen = document.getElementById('notSeen');
let click = document.getElementById('click');
let level = document.getElementById('level');

let lightArr = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, notSeen]; 

let i = 0;

function returnColor() {
    setTimeout(function() {
       lightArr[i - 1].style.backgroundColor = 'black'; 
    }, 750)
};

function startGame() {
    setTimeout(function(){
        lightArr[i].style.backgroundColor = 'red';
        i++;
        if(i < 13){
            returnColor();
            startGame();}
            if(i === 13){
        i -= 13;
        startGame();  
    }  
   }, 750)     
};

function advanceRound() {
window.location.href = 'level-Two.html'
window.alert("Nailed it!")
}

function loseGame() {
window.location.href = 'index.html'
window.alert('You Lost! Try Again!')
}

function checkNum() {
    if(i === 7){
       advanceRound(); 
    }else{
        loseGame();
    }
}

document.addEventListener('DOMContentLoaded', startGame);

click.addEventListener('mousedown', checkNum);

