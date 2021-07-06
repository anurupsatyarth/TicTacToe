import Game from "./game.js"
import GameView from "./GameView.js"

let game = new Game();
let gameview = new GameView();

let tiles = document.querySelectorAll(".board-tile");

document.querySelector(".restart").addEventListener("click",()=>{onRestartClick();})

tiles.forEach((tile) => {
    tile.addEventListener("click", ()=>{
        OnTileClick(tile.dataset.index);

    })

} )

function OnTileClick(i){
    // do something
    game.makeMove(i);
    gameview.updateBoard(game);
    
    //make a move
    //change turn
    //update board
}

function onRestartClick(){
    game =new Game();
    gameview.updateBoard(game);
}

gameview.updateBoard(game);
