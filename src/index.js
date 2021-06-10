import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import NewGame from "./components/NewGame";
import GameTime from "./components/GameTime";

import GameContext from "./context/GameContext";

function App() {
  const updatePointsAndState = (id, value, context) => {
    const player = context.players[id];
    player.points.push(parseInt(value, 10));
    context.players[id] = player;
    const newPlayers = context.players;
    setState({
      ...context,
      players: newPlayers
    });
  };
  const [state, setState] = useState({
    gameState: "newGame",
    setGameState: (gameState) => {
      setState({
        ...state,
        gameState: gameState
      });
    },
    players: [],
    setPlayers: (players, callBack) => {
      setState({
        ...state,
        players: players,
        gameState: "ready"
      });
    },
    updatePoints: updatePointsAndState
  });

  const { gameState, setGameState } = state;

  return (
    <GameContext.Provider value={state}>
      <div className="App container">
        <div className="row">
          <div className="column">
            <h1 className="logo">Rummy Time</h1>
            {gameState === "" && (
              <div className="new-game-button-container">
                <button
                  className="new-game-button"
                  onClick={() => {
                    setGameState("newGame");
                  }}
                >
                  New Game
                </button>
              </div>
            )}
          </div>
        </div>
        {gameState === "newGame" && <NewGame />}
        {gameState === "ready" && <GameTime />}
      </div>
    </GameContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
