//declare 
const X = "x"
const O = "o"
const combinationsToWin= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [1,4,7]
]
const tiles = document.querySelectorAll('[tile]')
const grid = document.getElementById('grid')
const endMessage = document.getElementById('endMessage') 
const winningMessage = document.querySelector('[winText]')
var winCounter = {X: 0, O: 0}
let Oturn

    start()

function start(){
    Oturn = false
    tiles.forEach(tile => {
        tile.classList.remove(X)
        tile.classList.remove(O)
        tile.addEventListener('click', whenClicked, {once: true})
    })
    endMessage.classList.remove('show')
    
}

//actions to take when a box is clicked
function whenClicked(e){
const tile = e.target
const currentClass = Oturn ? O : X
placeMove(tile, currentClass)
 
if (outcome(currentClass)){
    end(false)
}
else if(ifDraw()){
end(true)
}
else{
changeTurns()
}
}

//place x or o down
function placeMove(tile, currentClass){
    tile.classList.add(currentClass)
}

//change turns
function changeTurns(){
    Oturn = !Oturn
}

//go through combinations to find winner
    function outcome(currentClass){
        return combinationsToWin.some(combinations => {
         return combinations.every(index => {
                return tiles[index].classList.contains(currentClass)
            })
        })
    }
//if it ends in a draw
function ifDraw(){
    return [...tiles].every(tiles => {
        return tiles.classList.contains(O) || tiles.classList.contains(X)
    })
}
//end game
function end(draw){
    if (draw){
       winningMessage.innerHTML = "DRAW"
    }
    else{
        winningMessage.innerHTML = `${Oturn ? "O" : "X"} IS THE WINNER`
        
     }
     endMessage.classList.add('show')
}
//reset
const reset = document.getElementById('reset')
reset.addEventListener('click', start)

//scoreboard
function updateWincounter(){
    ++winCounter
}