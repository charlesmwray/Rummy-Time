import React, { useContext, useState } from "react";
import GameContext from "./../context/GameContext";
import colors from "./../static/colors";

const NewGame = () => {
  const context = useContext(GameContext);
  const [state, setState] = useState({});
  const [noPlayersAddedWarning, setNoPlayersAddedWarning] = useState(false);

  const PlayerGrid = () => {
    const players = [1, 2, 3, 4, 5, 6];
    return (
      <div className="row">
        {players.map((pl, i) => {
          return (
            <div className="column" style={{ margin: "0 2rem" }} key={i}>
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
                />
                <input type="color" id={`color-${i}`} name="color" />
                <button type="submit" name="addButton">
                  Add
                </button>
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

    e.target.addButton.innerText = "Added";

    setState(stateUpdate);
  };

  const addPlayers = () => {
    console.log(state);
    if (Object.keys(state).length > 0) {
      context.setPlayers(Object.values(state));
    } else {
      setNoPlayersAddedWarning(true);
      setTimeout(() => {
        setNoPlayersAddedWarning(false);
      }, 5000);
    }
  };

  return (
    <>
      <div className="row" style={{ marginBottom: "2rem" }}>
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
            margin: "5rem auto"
          }}
          onClick={() => {
            addPlayers();
          }}
        >
          Ready to rumble
        </button>
      </div>
      {noPlayersAddedWarning && (
        <div
          style={{
            margin: "1rem"
          }}
          className="row"
        >
          <h3>No players added.</h3>
        </div>
      )}
    </>
  );
};

export default NewGame;
