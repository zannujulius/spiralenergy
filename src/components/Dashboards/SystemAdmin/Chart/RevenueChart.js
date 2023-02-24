import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const RevenueChart = ({}) => {
  return (
    <Line
      data={{
        labels: [23, 43, 20, 50, 34, 57], // x axis
        datasets: [
          {
            type: "line",
            label: "",
            fill: false,
            backgroundColor: "#0183d0e2",
            data: [23, 43, 20, 50, 34, 57],
            borderColor: "#0183d0",
            radius: 1,
            borderWidth: 1,
            pointBorderWidth: 2,
            tension: 0.4,
          },
          {
            type: "line",
            label: "",
            fill: false,
            backgroundColor: "#ff634730",
            data: [10, 30, 20, 55, 43, 75],
            borderColor: "tomato",
            radius: 1,
            borderWidth: 1,
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

export default RevenueChart;
