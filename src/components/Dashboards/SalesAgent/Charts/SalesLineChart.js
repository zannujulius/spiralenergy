import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const SalesLineChart = ({}) => {
  return (
    <Line
      data={{
        labels: [23, 43, 20, 50, 34, 57], // x axis
        datasets: [
          {
            type: "bar",
            label: "",
            fill: true,
            backgroundColor: "#0183d0e2",
            data: [23, 43, 20, 50, 34, 57],
            borderColor: "#0183d0",
            radius: 1,
            borderWidth: 0,
            pointBorderWidth: 1,
            tension: 0.4,
          },
          {
            type: "bar",
            label: "",
            fill: true,
            backgroundColor: "#ff634730",
            data: [10, 30, 20, 55, 43, 75],
            borderColor: "tomato",
            radius: 1,
            borderWidth: 0,
            pointBorderWidth: 1,
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
            display: false,
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

export default SalesLineChart;
