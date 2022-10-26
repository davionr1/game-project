
const XClass = 'X'
const OClass = 'O'
const tilesElements = document.querySelectorAll('[data-tile]')
const grid = document.getElementById('grid')
const winningMessage = document.getElementById('outcome')
const winningMessageText = document.querySelector('data-win')
let XTurn
const AligntoWin= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
start()

function start(){
    XTurn = false
    tilesElements.forEach(tile => {
        tile.addEventListener('click', whenCLicked, {once: true})
    })
    setGridHoverCLass()
}

tilesElements.forEach(tile => {
    tile.addEventListener('click', whenClicked, { once: true })
})

function whenCLicked(e){
    const tile = e.target
    const currentClass = XTurn ? XClass : OClass
    placeTurn(tile, currentClass)
    if (checkWin(currentClass)){
        endGame(false)
    }
    changeTurns()
    setGridHoverCLass()
}

function endGame(draw){
    if (draw){

    }
    else{
        winningMessageText.innerText = `${XTurn ? "X" : "O}"} Wins`
    }
    winningMessage.classList.add('display')
}

function placeTurn(tile, currentClass){
 tile.classList.add(currentClass)
}
function changeTurns(){
    XTurn = !XTurn
}
function setGridHoverCLass(){
    grid.classList.remove(OClass)
    grid.classList.remove(XClass)
    if(XTurn){
        grid.classList.add(XClass)
    }
    else{
        grid.classList.add(OClass)
    }
}
function checkWin(currentClass){
    return AligntoWin.some(combination => {
        return combination.every(index => {
            return tilesElements[index].classList.contains(currentClass)
        }) 
    })
}