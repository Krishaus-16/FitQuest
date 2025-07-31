import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProgressChart = () => {
  const [progressList, setProgressList] = useState([]);

  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem("bmiProgress")) || [];
    setProgressList(savedProgress);
  }, []);

  const chartData = {
    labels: progressList.map((entry) => entry.date).reverse(),
    datasets: [
      {
        label: "BMI Over Time",
        data: progressList.map((entry) => parseFloat(entry.bmi)).reverse(),
        fill: false,
        backgroundColor: "#117a65",
        borderColor: "#117a65",
        borderWidth: 4,
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      title: { display: true, text: "BMI Progress Chart" },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 45,
          color: "#117a65",
          font: {
            weight: 600,
            size: 14,
          },
        },
        grid: {
          drawBorder: true,
          drawOnChartArea: false,
          drawTicks: true,
          color: "#117a65",
          lineWidth: 3,
        },
      },
      y: {
        ticks: {
          color: "#117a65",
          font: {
            weight: 600,
            size: 14,
          },
        },
        grid: {
          drawBorder: true,
          drawOnChartArea: false,
          drawTicks: true,
          color: "#117a65",
          lineWidth: 3,
        },
      },
    },
  };

  const barData = {
    labels: ["Underweight", "Normal", "Overweight", "Obese"],
    datasets: [
      {
        label: "BMI Status Count",
        data: [
          progressList.filter((entry) => entry.status === "Underweight").length,
          progressList.filter((entry) => entry.status === "Normal").length,
          progressList.filter((entry) => entry.status === "Overweight").length,
          progressList.filter((entry) => entry.status === "Obese").length,
        ],
        backgroundColor: ["#3498db", "#2ecc71", "#f1c40f", "#e74c3c"],
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      title: { display: true, text: "BMI Status Distribution" },
    },
    scales: {
      x: {
        ticks: {
          color: "#117a65",
          font: {
            weight: 600,
            size: 14,
          },
        },
        grid: {
          drawBorder: true,
          drawOnChartArea: false,
          drawTicks: true,
          color: "#117a65",
          lineWidth: 3,
        },
      },
      y: {
        ticks: {
          color: "#117a65",
          font: {
            weight: 600,
            size: 14,
          },
        },
        grid: {
          drawBorder: true,
          drawOnChartArea: false,
          drawTicks: true,
          color: "#117a65",
          lineWidth: 3,
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "40px 30px",
        boxSizing: "border-box",
        background: "linear-gradient(to right, #f3f4f6, #e0cba8)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          color: "#117a65",
          fontWeight: "700",
          fontSize: "2.5rem",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Progress Charts
      </h2>

      {progressList.length > 0 ? (
        <div
          style={{
            flex: 1,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
            overflowY: "auto",
            padding: "10px",
          }}
        >
          <div
            style={{
              flex: "1 1 45%",
              minWidth: "300px",
              backgroundColor: "transparent",
              borderRadius: "16px",
              padding: "25px",
              boxShadow: "none",
              height: "100%",
              maxHeight: "80vh",
            }}
          >
            <Line data={chartData} options={chartOptions} />
          </div>

          <div
            style={{
              flex: "1 1 45%",
              minWidth: "300px",
              backgroundColor: "transparent",
              borderRadius: "16px",
              padding: "25px",
              boxShadow: "none",
              height: "100%",
              maxHeight: "80vh",
            }}
          >
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
      ) : (
        <p
          style={{
            textAlign: "center",
            fontSize: "1.25rem",
            color: "#999",
            marginTop: "20px",
          }}
        >
          No progress data yet.
        </p>
      )}
    </div>
  );
};

export default ProgressChart;
