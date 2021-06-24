import React, { useContext, useState } from "react";
import GameContext from "./../context/GameContext";
import ChartView from "./Chart";
import PenaltyModal from "./PenaltyModal";

const GameTime = () => {
  const [showPenaltyModal, setShowPenaltyModal] = useState(false);
  const context = useContext(GameContext);
  const playerNames = [];
  const playerColors = [];
  const pointsset = [];

  const Points = (props) => {
    const { points, playerIndex } = props;
    const [showEditForm, setShowEditForm] = useState(false);

    return (
      <>
        <div
          onClick={() => {
            console.log(context.players[playerIndex].points);

            setShowEditForm(true);
          }}
          className="points-container"
        >
          {points.map((p, i) => {
            return i > 0 && <div key={`${i}-p`}>{p}</div>;
          })}
        </div>
        {showEditForm && (
          <div className="edit-form">
            <textarea
              id={`${playerIndex}-edit-points`}
              defaultValue={context.players[playerIndex].points}
            />
            <button
              onClick={() => {
                let points = document.getElementById(
                  `${playerIndex}-edit-points`
                ).value;
                let parsedPoints = [];

                points = points.trim().replace(" ", "").split(",");

                points.map((p) => {
                  parsedPoints.push(parseInt(p, 10));
                });

                context.editPoints(parsedPoints, playerIndex, context);
              }}
            >
              Save
            </button>
          </div>
        )}
      </>
    );
  };

  const togglePenaltyModal = () => {
    setShowPenaltyModal(true);
    setTimeout(() => {
      setShowPenaltyModal(false);
    }, 10000);
  };

  const cumulativize = (points) => {
    const cumulativeSum = ((sum) => (value) => (sum += value))(0);
    return points.map(cumulativeSum);
  };

  const ScoreGrid = () => {
    const total = (points) => points.reduce((a, b) => a + b, 0);
    return (
      <div className="row">
        {context.players.map((player, i) => {
          const tots = total(player.points);
          playerNames.push(player.name);
          playerColors.push(player.color);
          pointsset.push(cumulativize(player.points));

          return (
            <div className="column player-card" key={`player-${i}`}>
              <h3 style={{ color: player.color, fontWeight: "bold" }}>
                {player.name}
              </h3>
              <Points points={player.points} playerIndex={i} />
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const valueField = e.currentTarget.getElementsByTagName(
                    "input"
                  )[0];
                  const value = valueField.value;
                  const id = valueField.id.substr(-1, 1);
                  value !== "" && context.updatePoints(id, value, context);
                }}
              >
                <div className="row">
                  <div className="column column-50">
                    <input name="points" type="number" id={`player-${i}`} />
                  </div>
                  <div className="column">
                    <button type="submit">+</button>
                  </div>
                  <div className="column">
                    <button
                      className="button-clear"
                      style={{ padding: "0" }}
                      onClick={() => {
                        let arr = context.players[i].points;

                        if (arr.length > 0) {
                          let val = arr[arr.length - 1];
                          arr.splice(-1, 1);
                          arr.push(val - 5);
                        } else {
                          context.players[i].points = [-5];
                        }
                        context.players[i].name += "🚩";

                        togglePenaltyModal();
                      }}
                    >
                      Pen
                    </button>
                  </div>
                </div>
              </form>
              <h3>{tots}</h3>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="game-time-container">
      <ScoreGrid />
      <ChartView
        players={playerNames}
        colors={playerColors}
        pointsset={pointsset}
      />
      {showPenaltyModal && <PenaltyModal />}
    </div>
  );
};

export default GameTime;
