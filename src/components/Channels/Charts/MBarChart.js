import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const MBarCharts = ({}) => {
  return (
    <Bar
      data={{
        labels: Array.from(Array(100)).map(
          () => Math.floor(Math.random() * 100) + 1
        ),
        datasets: [
          {
            type: "line",
            label: "Energy",
            fill: false,
            backgroundColor: "",
            data: Array.from(Array(100)).map(
              () => Math.floor(Math.random() * 100) + 1
            ),
            borderColor: "dodgerblue",
            // barThickness: 30,
            radius: 1,
            borderWidth: 1,
            pointBorderWidth: 0.5,
            tension: 0.1,
          },
          // {
          //   label: "Current",
          //   fill: true,
          //   backgroundColor: "dodgerblue",
          //   data: [],
          //   // borderColor: "#56BBF1",
          //   barThickness: 30,
          //   radius: 0,
          //   // borderWidth: 2,
          //   pointBorderWidth: 1,
          //   tension: 0.1,
          // },
          // {
          //   label: "Voltage",
          //   fill: true,
          //   backgroundColor: "#fefe2e",
          //   data: [],
          //   barThickness: 30,
          //   // borderColor: "#56BBF1",
          //   radius: 0,
          //   // borderWidth: 2,
          //   pointBorderWidth: 1,
          //   tension: 0.1,
          // },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: "dodgerblue",
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
          },
          y: {
            display: true,
            grid: {
              display: true,
              color: "#DEDEDE",
              borderDash: [10, 3],
            },
          },
        },
      }}
    />
  );
};

export default MBarCharts;
