import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const MBarCharts = ({}) => {
  return (
    <div
      style={{
        height: 400,
        width: "100%",
      }}
    >
      <Bar
        data={{
          labels: [],
          datasets: [
            {
              label: "Energy",
              fill: true,
              backgroundColor: "tomato",
              data: [],
              // borderColor: "#56BBF1",
              barThickness: 30,
              radius: 0,
              // borderWidth: 2,
              pointBorderWidth: 1,
              tension: 0.1,
            },
            {
              label: "Current",
              fill: true,
              backgroundColor: "dodgerblue",
              data: [],
              // borderColor: "#56BBF1",
              barThickness: 30,
              radius: 0,
              // borderWidth: 2,
              pointBorderWidth: 1,
              tension: 0.1,
            },
            {
              label: "Voltage",
              fill: true,
              backgroundColor: "#fefe2e",
              data: [],
              barThickness: 30,
              // borderColor: "#56BBF1",
              radius: 0,
              // borderWidth: 2,
              pointBorderWidth: 1,
              tension: 0.1,
            },
          ],
        }}
        options={{
          indexAxis: "y",
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              labels: {
                color: "black",
              },
              position: "bottom",
            },
            title: {
              display: false,
              text: "Zonal Sales",
              color: "#001755",
              font: {
                size: 14,
                weight: 500,
              },
            },
          },
          scales: {
            x: {
              display: true,
              grid: {
                display: false,
              },
              stacked: true,
            },
            y: {
              display: true,
              grid: {
                display: true,
                color: "#DEDEDE",
                borderDash: [10, 3],
              },
              stacked: true,
            },
          },
        }}
      />
    </div>
  );
};

export default MBarCharts;
