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
              <form
                onSubmit={(e) => {
                  addPlayerDataToState(e);
                  e.preventDefault();
                }}
              >
                <input
                  autoComplete="off"
                  type="text"
                  id={`nameField-${i}`}
                  name="name"
                  // onChange={(e) => {
                  //   addPlayerDataToState(e);
                  // }}
                />
                <input type="color" id={`color-${i}`} name="color" />
                <button type="submit">Add</button>
              </form>
            </div>
          );
        })}
      </div>
    );
  };

  const addPlayerDataToState = (e) => {
    const stateUpdate = state || {};

    stateUpdate[e.target.name.id] = {
      name: e.target.name.value,
      color: e.target.color.value,
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
