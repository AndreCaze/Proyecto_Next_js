import { Kanit, Lato } from 'next/font/google'

const lato_sub = Lato({subsets: ['latin'], weight: ["400"], style: ["normal"] });
const kanit_alert = Kanit({ subsets: ['latin'], weight: ["700"], style: ["normal"] });


export default function Table({
    result,
    result_kg,
    bone_mass,
    por_bone_mass,
    residual_mass,
    por_residual_mass,
    composition,
    por_composition
}) {
    return (
        <div className="bg-table text-center rounded-md mt-3 items-center">
          <table class="sm:table-auto md:table-fixed w-full border-collapse border border-slate-500">
            <thead className={`${kanit_alert.className}`}>
              <tr>
                <th className='border border-slate-600'>Componente</th>
                <th className='border border-slate-600'>%</th>
                <th className='border border-slate-600'>Kg</th>
              </tr>
            </thead>
            <tbody className={`${lato_sub.className}`}>
              <tr>
                <td className='border border-slate-700'>Masa Grasa</td>
                <td className='border border-slate-700'>{result.toFixed(2)}</td>
                <td className='border border-slate-700'>{result_kg.toFixed(2)}</td>
              </tr>
              <tr>
                <td className='border border-slate-700'>Masa Osea</td>
                <td className='border border-slate-700'>{por_bone_mass.toFixed(1)}</td>
                <td className='border border-slate-700'>{bone_mass.toFixed(2)}</td>
              </tr>
              <tr>
                <td className='border border-slate-700'>Masa Residual</td>
                <td className='border border-slate-700'>{por_residual_mass.toFixed(1)}</td>
                <td className='border border-slate-700'>{residual_mass.toFixed(2)}</td>
              </tr>
              <tr>
                <td className='border border-slate-700'>Masa Muscular</td>
                <td className='border border-slate-700'>{por_composition.toFixed(1)}</td>
                <td className='border border-slate-700'>{composition.toFixed(1)}</td>
              </tr>
            </tbody>
          </table>
        </div>
    );

}




