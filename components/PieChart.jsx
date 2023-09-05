import Chart from 'chart.js/auto'
import { useEffect } from "react"

export default function PieChart({
    result,
    result_kg,
    bone_mass,
    por_bone_mass,
    residual_mass,
    por_residual_mass,
    composition,
    por_composition
}) {
    useEffect(()=>{
            const char = document.getElementById('cake');
            const chart = document.getElementById('bar');
            new Chart(char, {
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

          new Chart(chart, {
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

        },[])
    

    return (
        <div className="w-[1100px] h-screen flex gap-5 mx-auto my-auto">
            <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
                <canvas id='cake'></canvas>
            </div>
            <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
                <canvas id='bar'></canvas>
            </div>
        </div>
    );
}