import React, { useContext, useState } from "react";
import GameContext from "./../context/GameContext";
import colors from "./../static/colors";

const NewGame = () => {
  const context = useContext(GameContext);
  const [state, setState] = useState({});

  const PlayerGrid = () => {
    const players = [1, 2, 3, 4, 5, 6];
    return (
      <div className="row">
        {players.map((pl, i) => {
          return (
            <div className="column" key={i}>
              <input
                autoComplete="off"
                type="text"
                id={`nameField-${i}`}
                onChange={(e) => {
                  addPlayerNameToState(e);
                }}
              />
            </div>
          );
        })}
      </div>
    );
  };

  const addPlayerNameToState = (e) => {
    const stateUpdate = state || {};
    stateUpdate[e.target.id] = {
      name: e.target.value,
      points: [0]
    };
    setState(stateUpdate);
  };

  const addPlayers = () => {
    context.setPlayers(Object.values(state));
  };

  return (
    <>
      <div className="row">
        <h2 className="column">Who's in?</h2>
      </div>
      <div className="row">
        <div className="column">
          <PlayerGrid />
        </div>
      </div>
      <div className="row">
        <button
          style={{
            margin: "0 auto"
          }}
          onClick={() => {
            addPlayers();
          }}
        >
          Ready to rumble
        </button>
      </div>
    </>
  );
};

export default NewGame;
