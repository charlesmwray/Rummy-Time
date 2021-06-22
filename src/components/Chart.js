import React from "react";
import { Line } from "react-chartjs-2";

// import "chartjs-plugin-annotation";

const ChartView = (props) => {
  const generateDatasets = () => {
    let labelArray = [];
    for (let i = 0; i < props.pointsset[0].length; i++) {
      labelArray.push(`Round ${i + 1}`);
    }
    return {
      labels: labelArray,
      datasets: props.pointsset.map((points, i) => {
        return {
          data: points,
          label: props.players[i],
          borderColor: props.colors[i],
          fill: false
        };
      })
    };
  };

  return (
    <>
      <div className="row">
        <div className="column">
          <div
            style={{
              width: "70vw",
              margin: "0 auto"
            }}
          >
            <Line
              data={() => {
                return generateDatasets();
              }}
              redraw={true}
              options={{
                scales: {
                  xAxes: [
                    {
                      ticks: {
                        beginAtZero: true
                      }
                    }
                  ],
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true
                      }
                    }
                  ]
                },
                legend: {
                  display: false
                },
                annotation: {
                  annotations: [
                    {
                      type: "line",
                      mode: "horizontal",
                      scaleID: "y-axis-0",
                      value: 200,
                      borderColor: "red",
                      borderWidth: 2,
                      label: {
                        backgroundColor: "red",
                        //content: "Test Label",
                        enabled: true
                      }
                    }
                  ]
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartView;
