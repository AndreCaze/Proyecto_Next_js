import Chart from 'chart.js/auto'
import { useEffect, useRef } from "react"

export default function PieChart({
    result,
    por_bone_mass,
    por_residual_mass,
    por_composition
}) {
  const chartRef = useRef(null);
    useEffect(()=>{
            const char = document.getElementById('cake');

            if(chartRef.current){
              chartRef.current.destroy();
            }


            const left = new Chart(char, {
            type: 'pie',
            data: {
              labels: ['Masa Grasa','Masa Osea','Masa Residual','Masa Muscular'],
              datasets: [{
                data: [result, por_bone_mass, por_residual_mass, por_composition],
                    label: "%",
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


          chartRef.current = left;

        },[result,
          por_bone_mass,
          por_residual_mass,
          por_composition])
    

    return (
            <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
                <canvas id='cake'></canvas>
            </div>
    );
}