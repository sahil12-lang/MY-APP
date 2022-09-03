import React, { useState, useEffect } from "react";
import SquareComponent from "./SquareComponent";
const initialState = ["", "", "", "", "", "", "", "", ""];

let isXChance = false;
function App() {
  const [gameState, updateGameSet] = useState(initialState);
  

  const onSquareClicked = (index) => {
    let strings = Array.from(gameState);
    console.log(index);
    if (strings[index] === "") { 
      strings[index] = isXChance ? "X" : "0";
      updateGameSet(strings);
      isXChance = !isXChance;
    }
  };
  useEffect(() => {
    const draw = checkIfTie();
    const winner = checkWinner();
    if (winner) {
      console.log("alert coming");
      alert(`winner winner Chicken DINNER! ${winner} has won `);
      updateGameSet(initialState);
    }  
  }, [gameState]);

  const checkIfTie = () =>{
    let filled = true;
    gameState.forEach((index) => {
      if (index == ""){
        filled = false
      }
    })
    if (filled) {
      alert(`Draw`)
    }
  }

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c] 
      ) {
        return gameState[a];
      }
    }
    return null;
  };
  
  

  return (
    <div className="main">
      <p className="main-text"> React Tic Tac Toe </p>

      <div className="row jc-center">
        <SquareComponent
          className="right"
          state={gameState[0]}
          onClick={() => onSquareClicked(0)}
        />
        <SquareComponent
          className="right"
          state={gameState[1]}
          onClick={() => onSquareClicked(1)}
        />
        <SquareComponent
          className="bottom"
          state={gameState[2]}
          onClick={() => onSquareClicked(2)}
        />
      </div>
      <div className="row jc-center">
        <SquareComponent
          className="right"
          state={gameState[3]}
          onClick={() => onSquareClicked(3)}
        />
        <SquareComponent
          className="right"
          state={gameState[4]}
          onClick={() => onSquareClicked(4)}
        />
        
        <SquareComponent
          className="bottom"
          state={gameState[5]}
          onClick={() => onSquareClicked(5)}
        />
      </div>
      
      
      
      <div className="row jc-center">
        <SquareComponent
          className="border-right"
          state={gameState[6]}
          onClick={() => onSquareClicked(6)}
        />

        <SquareComponent
          className="border-right"
          state={gameState[7]}
          onClick={() => onSquareClicked(7)}
        />

        <SquareComponent
          className=""
          state={gameState[8]}
          onClick={() => onSquareClicked(8)}
        />
      </div>
      <button
        className="reset-button"
        onClick={() => updateGameSet(initialState)}
      >
        Reset Game
      </button>
      <p> Sahil's tic-tac-toe</p>
    </div>
  );
}
export default App;
