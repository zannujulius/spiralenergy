import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const PowerQualityChart = ({}) => {
  return (
    <Line
      data={{
        labels: Array.from(Array(12)).map(
          (i) => Math.floor(Math.random() * 100) + 1
        ), // x axis
        datasets: [
          {
            type: "bar",
            label: "Voltage",
            fill: false,
            backgroundColor: "#0183d0e2",
            data: Array.from(Array(12)).map(
              (i) => Math.floor(Math.random() * 100) + 1
            ),
            borderColor: "#0183d0",
            radius: 1,
            borderWidth: 0,
            pointBorderWidth: 2,
            tension: 0.4,
          },
          {
            type: "bar",
            label: "current",
            fill: false,
            backgroundColor: "#ff634730",
            data: Array.from(Array(12)).map(
              (i) => Math.floor(Math.random() * 100) + 1
            ),
            borderColor: "tomato",
            radius: 1,
            borderWidth: 0,
            pointBorderWidth: 2,
            tension: 0.4,
          },
          {
            type: "bar",
            label: "frequency",
            fill: false,
            backgroundColor: "gray",
            data: Array.from(Array(12)).map(
              (i) => Math.floor(Math.random() * 100) + 1
            ),
            borderColor: "",
            radius: 1,
            borderWidth: 0,
            pointBorderWidth: 2,
            tension: 0.4,
          },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: false,
          title: {
            display: false,
          },
          tooltip: {
            // callbacks: {
            //   label: function (tooltipItem, data) {
            //     return numFormtter(parseInt(tooltipItem.parsed.y));
            //   },
            // },
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
              borderDash: [10],
              borderDashOffset: 20,
              borderWidth: 0,
              color: "#eee",
            },
          },
        },
      }}
    />
  );
};

export default PowerQualityChart;
