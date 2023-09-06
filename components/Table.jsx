import React from "react";
import { Kanit, Lato } from 'next/font/google'

//Variables of the imported Google Fonts
const lato_sub = Lato({subsets: ['latin'], weight: ["400"], style: ["normal"] });
const kanit_alert = Kanit({ subsets: ['latin'], weight: ["700"], style: ["normal"] });

//Table Component
export default function Table({ percentages, masses }){
  return (
    <div className="bg-table text-center rounded-md mt-3 items-center">
      <table className="sm:table-auto md:table-fixed w-full border-collapse border border-slate-500">
        <thead className={`${kanit_alert.className}`}>
          <tr>
            <th className='border border-slate-600'>Componente</th>
            <th className='border border-slate-600'>%</th>
            <th className='border border-slate-600'>Kg</th>
          </tr>
        </thead>
        <tbody className={`${lato_sub.className}`}>
          <tr>
            <td className='border border-slate-700'>Masa grasa</td>
            <td className='border border-slate-700'>{percentages.fat_mass.toFixed(2)} %</td>
            <td className='border border-slate-700'>{masses.fat_mass.toFixed(2)} kg</td>
          </tr>
          <tr>
            <td className='border border-slate-700'>Masa ósea</td>
            <td className='border border-slate-700'>{percentages.bone_mass.toFixed(2)} %</td>
            <td className='border border-slate-700'>{masses.bone_mass.toFixed(2)} kg</td>
          </tr>
          <tr>
            <td className='border border-slate-700'>Masa residual</td>
            <td className='border border-slate-700'>{percentages.residual_mass.toFixed(2)} %</td>
            <td className='border border-slate-700'>{masses.residual_mass.toFixed(2)} kg</td>
          </tr>
          <tr>
            <td className='border border-slate-700'>Masa muscular</td>
            <td className='border border-slate-700'>{percentages.muscular_mass.toFixed(2)} %</td>
            <td className='border border-slate-700'>{masses.muscular_mass.toFixed(2)} kg</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};