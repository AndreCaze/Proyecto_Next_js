import Chart from 'chart.js/auto'
import { useEffect, useRef } from "react"
import ChartDataLabels from "chartjs-plugin-datalabels";

//BarChart Component
export default function PieChart({ masses }) {
  const chartRef = useRef(null);
    useEffect(()=>{
      //Data to use in the Chart
      const { fat_mass, bone_mass, residual_mass, muscular_mass } = masses;

      const chart = document.getElementById('bar');

      //Method to destroy current chart
      if(chartRef.current){
        chartRef.current.destroy();
      }

      //Declaration of the Chart
      const right = new Chart(chart, {
        type: 'bar',
        data: {
        labels: ['Masa Grasa','Masa Osea','Masa Residual','Masa Muscular'],
        datasets: [{
          data: [
              fat_mass.toFixed(2),
              bone_mass.toFixed(2),
              residual_mass.toFixed(2),
              muscular_mass.toFixed(2),
          ],
          label: "Kg",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderWidth: 2
          }]
          },
        plugins: [ChartDataLabels],
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            datalabels: {
              font: "bold",
              formatter: (value) => value + "%",
            },
          },
        },
      });

      //Replacement of the Chart
      chartRef.current = right;

    },[masses])
    
    return (
            <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto  shadow-xl'>
                <canvas id='bar'></canvas>
            </div>
    );
}