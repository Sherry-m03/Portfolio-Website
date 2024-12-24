import React, { useState } from "react";

function DiceGame() {
  const [player1Dice, setPlayer1Dice] = useState(6); // Default dice image
  const [player2Dice, setPlayer2Dice] = useState(6); // Default dice image
  const [winner, setWinner] = useState("Click 'Play' to roll the dice!");

  const rollDice = () => {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    setPlayer1Dice(randomNumber1);
    setPlayer2Dice(randomNumber2);

    if (randomNumber1 > randomNumber2) {
      setWinner("🚩 Player 1 wins!");
    } else if (randomNumber2 > randomNumber1) {
      setWinner("Player 2 wins! 🚩");
    } else {
      setWinner("It's a draw!");
    }
  };

  return (
    <div className="DiceGameContainer">
      <h1>{winner}</h1>

      <div className="player-dice">
        <div className="dice">
          <h3>Player 1</h3>
          <img
            className="img1"
            src={`dice${player1Dice}.png`}
            alt={`Player 1 rolled a ${player1Dice}`}
          />
        </div>

        <div className="dice">
          <h3>Player 2</h3>
          <img
            className="img2"
            src={`dice${player2Dice}.png`}
            alt={`Player 2 rolled a ${player2Dice}`}
          />
        </div>
      </div>

      <button onClick={rollDice} className="dice-play-button">
        Play
      </button>
    </div>
  );
}

export default DiceGame;
