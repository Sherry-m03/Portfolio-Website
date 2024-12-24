import React, { useState, useEffect } from "react";

export default function SimonGame() {
  const buttonColours = ["red", "blue", "green", "yellow"];
  const [gamePattern, setGamePattern] = useState([]);
  const [userClickedPattern, setUserClickedPattern] = useState([]);
  const [level, setLevel] = useState(0);
  const [start, setStart] = useState(false);

  // Start game on keypress
  useEffect(() => {
    const handleKeyPress = () => {
      if (!start) {
        setStart(true);
        nextSequence();
      }
    };
    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [start]);

  // Handle button click
  const handleButtonClick = (color) => {
    const newUserClickedPattern = [...userClickedPattern, color];
    setUserClickedPattern(newUserClickedPattern); // Update state
    playSound(color);
    animatePress(color);

    // Pass the updated pattern to checkAnswer
    checkAnswer(newUserClickedPattern.length - 1, newUserClickedPattern);
  };

  // Generate next sequence
  const nextSequence = () => {
    setUserClickedPattern([]); // Reset user input for the new sequence
    setLevel((prevLevel) => prevLevel + 1); // Increment the level

    const randomNumber = Math.floor(Math.random() * 4); // Generate a random number
    const randomChosenColour = buttonColours[randomNumber]; // Choose a random color

    // Update the gamePattern array correctly
    setGamePattern((prevPattern) => {
      const newPattern = [...prevPattern, randomChosenColour];
      console.log("Updated gamePattern:", newPattern); // Debugging output
      return newPattern;
    });

    // Flash the button and play sound for the chosen color
    setTimeout(() => {
      flashButton(randomChosenColour);
      playSound(randomChosenColour);
    }, 500);
  };
  // Check user's answer
  const checkAnswer = (currentLevel, currentUserClickedPattern) => {
    console.log("Checking answer...");
    console.log("gamePattern:", gamePattern);
    console.log("userClickedPattern:", currentUserClickedPattern);

    if (gamePattern[currentLevel] === currentUserClickedPattern[currentLevel]) {
      if (currentUserClickedPattern.length === gamePattern.length) {
        setTimeout(nextSequence, 1000);
      }
    } else {
      console.log("Wrong answer! Game Over");
      playSound("wrong");
      document.body.classList.add("simon-game-over");
      setTimeout(() => document.body.classList.remove("simon-game-over"), 200);

      setStart(false);
      setLevel(0);
      setGamePattern([]);
      setUserClickedPattern([]);
    }
  };

  // Reset game state
  const resetGame = () => {
    setStart(false);
    setLevel(0);
    setGamePattern([]);
    setUserClickedPattern([]);
  };

  // Play sound
  const playSound = (color) => {
    const audio = new Audio(`${color}.mp3`);
    audio.play();
  };

  // Animate button press
  const animatePress = (color) => {
    const button = document.getElementById(`simon-${color}`);
    if (button) {
      button.classList.add("simon-pressed");
      setTimeout(() => button.classList.remove("simon-pressed"), 100);
    }
  };

  // Flash button during sequence
  const flashButton = (color) => {
    const button = document.getElementById(`simon-${color}`);
    if (button) {
      button.classList.add("simon-pressed");
      setTimeout(() => button.classList.remove("simon-pressed"), 100);
    } else {
      console.error(`Button with ID "simon-${color}" not found.`);
    }
  };

  return (
    <div className="simonG">
      <h1 style={{ margin: "1% 0" }} id="simon-level-title">
        Simon Game
      </h1>
      <h1 style={{ marginBottom: "3%" }} id="simon-level-title">
        {start ? `Level ${level}` : "Press A Key to Start"}
      </h1>
      <div className="simon-container">
        <div className="simon-row">
          <div
            id="simon-green"
            className="simon-btn simon-green"
            onClick={() => handleButtonClick("green")}
          ></div>
          <div
            id="simon-red"
            className="simon-btn simon-red"
            onClick={() => handleButtonClick("red")}
          ></div>
        </div>
        <div className="simon-row">
          <div
            id="simon-yellow"
            className="simon-btn simon-yellow"
            onClick={() => handleButtonClick("yellow")}
          ></div>
          <div
            id="simon-blue"
            className="simon-btn simon-blue"
            onClick={() => handleButtonClick("blue")}
          ></div>
        </div>
      </div>
    </div>
  );
}
