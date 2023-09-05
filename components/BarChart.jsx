import Chart from 'chart.js/auto'
import { useEffect, useRef } from "react"

export default function PieChart({
    result_kg,
    bone_mass,
    residual_mass,
    composition,
}) {
  const chartRef = useRef(null);
    useEffect(()=>{
            const chart = document.getElementById('bar');

            if(chartRef.current){
              chartRef.current.destroy();
            }

          const right = new Chart(chart, {
            type: 'bar',
            data: {
              labels: ['Masa Grasa','Masa Osea','Masa Residual','Masa Muscular'],
              datasets: [{
                data: [result_kg, bone_mass, residual_mass, composition],
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
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              },
              plugins: {
                  legend: {
                    labels: {
                      font: {
                        size: 24
                      }
                    }
                  }
                }
            }
          });

          chartRef.current = right;

        },[result_kg,
          bone_mass,
          residual_mass,
          composition])
    

    return (
            <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
                <canvas id='bar'></canvas>
            </div>
    );
}