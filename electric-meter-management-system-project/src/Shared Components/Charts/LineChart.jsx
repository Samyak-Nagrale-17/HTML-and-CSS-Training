/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import './LineChart.css';

function LineChart({ chartData }) {
  return (
    <div className="chart-container">
      <Line
        className="line-chart"
        data={chartData}
        options={{
          responsive: true, 
          maintainAspectRatio: false, 
          plugins: {
            title: {
              display: true,
              text: "Monthly Consumption Trend"
            },
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Time'
              } 
            },
            y: {
              title: {
                display: true,
                text: 'Consumption (in units)'
              }
            }
          }
        }}
      />
    </div>
  );
}

export default LineChart;
