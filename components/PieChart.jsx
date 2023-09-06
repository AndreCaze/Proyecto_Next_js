import Chart from 'chart.js/auto'
import { useEffect, useRef } from "react"
import ChartDataLabels from "chartjs-plugin-datalabels";

//PieChart Component
export default function PieChart({ percentages }) {
  const chartRef = useRef(null);

  useEffect(() => {
    //Data to use in the Chart
    const { fat_mass, bone_mass, residual_mass, muscular_mass } = percentages;

    const ctx = document.getElementById("myChart");

    //Method to destroy current chart
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    //Declaration of the Chart
    const newChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Masa grasa", "Masa ósea", "Masa residual", "Masa muscular"],
        datasets: [
          {
            label: "%",
            data: [
              fat_mass.toFixed(2),
              bone_mass.toFixed(2),
              residual_mass.toFixed(2),
              muscular_mass.toFixed(2),
            ],
            backgroundColor: ["#ffecc1", "#96e5ff", "#b8f7e6", "#f3c9d3"],
            borderColor: ["#ffd166", "#118ab2", "#06d6a0", "#ef476f"],
            borderWidth: 2,
            hoverOffset: 15,
          },
        ],
      },
      plugins: [ChartDataLabels],
      options: {
        plugins: {
          datalabels: {
            font: "bold",
            formatter: (value) => value + "%",
          },
        },
      },
    });

    //Replacement of the Chart
    chartRef.current = newChart;
  }, [percentages]);

  return (
    <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto  shadow-xl'>
      <canvas id="myChart"></canvas>
    </div>
  );
}