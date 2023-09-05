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
            new Chart(char, {
            type: 'bar',
            data: {
              labels: ['Masa Grasa','Masa Osea','Masa Residual','Masa Muscular'],
              datasets: [{
                data: [result, por_bone_mass, por_residual_mass, por_composition],
                    label: "%",
                    borderColor: "rgb(109, 253, 181)",
                    backgroundColor: "rgb(109, 253, 181,0.5)",
                    borderWidth: 2
                }, {
                    data: [result_kg, bone_mass, residual_mass, composition],
                    label: "Kg",
                    borderColor: "rgb(75, 192, 192)",
                    backgroundColor: "rgb(75, 192, 192,0.5)",
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
        <div className="w-[1100px] h-screen flex mx-auto my-auto">
            <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
                <canvas id='cake'></canvas>
            </div>
        </div>
    );
}