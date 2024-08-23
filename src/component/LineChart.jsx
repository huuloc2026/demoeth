// src/components/LineChart.jsx
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Import Chart.js

const LineChart = () => {
  const chartRef = useRef(null); // Ref to hold the chart instance

  useEffect(() => {
    // Initialize the chart when the component mounts
    const ctx = chartRef.current.getContext("2d"); // Get the 2D context
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderColor: "rgb(75, 192, 192)", // Line color
            backgroundColor: "rgba(75, 192, 192, 0.2)", // Line background color
            fill: true, // Fill the area under the line
          },
        ],
      },
      options: {
        scales: {
          y: {
            ticks: {
              beginAtZero: true, // Start y-axis at zero
            },
          },
        },
      },
    });

    // Clean up the chart when the component unmounts
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Line Chart Example
      </h2>
      <canvas ref={chartRef} /> {/* Canvas for Chart.js */}
    </div>
  );
};

export default LineChart;
