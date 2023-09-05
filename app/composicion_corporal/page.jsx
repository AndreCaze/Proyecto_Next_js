"use client";
import { Kanit, Lato } from 'next/font/google'
import React, { useState } from "react";
import Table from '../table/page';
import PieChart from '@/components/PieChart';
import BarChart from '@/components/BarChart';

const kanit = Kanit({ subsets: ['latin'], weight: ["600"], style: ["normal"] });
const lato = Lato({subsets: ['latin'], weight: ["900"], style: ["normal"] });
const lato_sub = Lato({subsets: ['latin'], weight: ["400"], style: ["normal"] });
const kanit_alert = Kanit({ subsets: ['latin'], weight: ["700"], style: ["normal"] });

export default function Composition() {
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [tricep, setTricep] = useState('');
  const [bicep, setBicep] = useState('');
  const [subscapularis, setSubscapularis] = useState('');
  const [suprailiac, setSuprailiac] = useState('');
  const [bistyloid, setBistyloid] = useState('');
  const [femur, setFemur] = useState('');
  const [density, setDensity] = useState(null);
  const [result, setResult] = useState(null); //porcentaje masa grasa
  const [result_kg, setResult_kg] = useState(null); //masa grasa
  const [bone_mass, setBone_mass] = useState(null); //masa osea
  const [residual_mass, setResidual_mass] = useState(null); // masa residual
  const [por_bone_mass, setPor_bone_mass] = useState(null); //porcentaje masa osea
  const [por_residual_mass, setPor_residual_mass] = useState(null); //porcentaje masa residual
  const [composition, setComposition] = useState(null); //masa muscular
  const [por_composition, setPor_composition] = useState(null); //porcentaje masa muscualar
  const [error, setError] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que los campos necesarios estén completos
    if (gender && tricep && bicep && subscapularis && suprailiac && bistyloid && femur && height && weight) {
      const logX1 =
        Math.log10(
            parseFloat(tricep) +
            parseFloat(bicep) +
            parseFloat(subscapularis) +
            parseFloat(suprailiac)
        ) || 0; // Asegurar que el valor no sea NaN

      let DC;

      if (gender === "hombre") {
        DC = 1.1765 - 0.0744 * logX1;
      } else if (gender === "mujer") {
        DC = 1.1567 - 0.0717 * logX1;
      }

      const height_2 = Math.pow((height/100),2);
      const accumulated = (height_2 * (parseFloat(femur)/100) * (parseFloat(bistyloid)/100) * 400)
      const accumulated_elevated = Math.pow(accumulated,0.712);
      const bone_result = accumulated_elevated * 3.02;
      setBone_mass(bone_result);

      let residual_result;

      if (gender === "hombre") {
        residual_result = (weight * 0.24);
      } else if (gender === "mujer") {
        residual_result = (weight * 0.21);
      }

      setResidual_mass(residual_result);
      setDensity(DC);
      const corporalMassPorcentage = (495 / DC) - 450;
      setResult(corporalMassPorcentage);

      const bone_porcentage = (bone_result*100/weight*100)/100;
      setPor_bone_mass(bone_porcentage);
      const residual_porcentage = (residual_result*100/weight*100)/100;
      setPor_residual_mass(residual_porcentage);
      const corporal_mass = (corporalMassPorcentage*0.01*weight*100)/100;
      setResult_kg(corporal_mass);


      const muscular_mass_porcentage = ((100 - bone_porcentage - residual_porcentage - corporalMassPorcentage)*100)/100;
      setPor_composition(muscular_mass_porcentage);
      const muscular_mass = (weight*0.01*muscular_mass_porcentage*100)/100;
      setComposition(muscular_mass);

    } else {
      console.log('Error');
      setResult(null);
      setDensity(null);
      setBone_mass(null);
      setResidual_mass(null);
      setError(true);
      return;
    }

    setError(false);

  };

  const handlePositiveInputChange = (value, setValue) => {
    if (value >= 0) {
      setValue(value);
    }

  };

  return (
    <div className="bg-primary h-screen w-screen flex flex-col items-center justify-start overflow-y-scroll">
      <div className='m-[20px] p-[15px]  bg-secundary rounded-md text-black'>
      <h1 className={`${kanit.className} font-bold text-center text-xl`}>Composición Corporal</h1>
      <form className="grid grid-cols-4 gap-4 mt-4" onSubmit={handleSubmit}>
      { error && (<div className={`${kanit_alert.className} bg-alert_color col-start-1 col-span-4 font-bold text-center rounded-md mt-3 mb-3 pb-3 pt-3`} ><p>¡Alerta! Hay una casilla vacia o un dato incorrecto</p></div>)}
        <label className={`${lato.className} border-1 p-1 w-full rounded-md mb-1`}>
          Género:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className={`${lato_sub.className} border-1 w-full ml-2 rounded-md`}>
            <option value="">Seleccionar</option>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </select>
        </label>
        <label className={`${lato.className} block mb-1 mt-1`}>
          Peso (Kg):
          <input
            type="number"
            className={`${lato_sub.className} border-1 p-1 w-full rounded-md mb-1`}
            value={weight}
            onChange={(e) => handlePositiveInputChange(parseFloat(e.target.value), setWeight)}
          />
        </label>
        <label className={`${lato.className} block mb-1 mt-1`}>
          Altura/Talla (cm):
          <input
            type="number"
            className={`${lato_sub.className} border-1 p-1 w-full rounded-md mb-1`}
            value={height}
            onChange={(e) => handlePositiveInputChange(parseFloat(e.target.value), setHeight)}
          />
        </label>
        <label className={`${lato.className} block mb-1 mt-1`}>
          Edad (Años):
          <input
            type="number"
            className={`${lato_sub.className} border-1 p-1 w-full rounded-md mb-1`}
            value={age}
            onChange={(e) => handlePositiveInputChange(parseFloat(e.target.value), setAge)}
          />
        </label>
        <label className={`${lato.className} block mb-1 mt-1`}>
          Bíceps (mm):
          <input
            type="number"
            className={`${lato_sub.className} border-1 p-1 w-full rounded-md mb-1`}
            value={bicep}
            onChange={(e) => handlePositiveInputChange(parseFloat(e.target.value), setBicep)}
          />
        </label>
        <label className={`${lato.className} block mb-1 mt-1`}>
          Tríceps (mm):
          <input
            type="number"
            className={`${lato_sub.className} border-1 p-1 w-full rounded-md mb-1`}
            value={tricep}
            onChange={(e) => handlePositiveInputChange(parseFloat(e.target.value), setTricep)}
          />
        </label>
        <label className={`${lato.className} block mb-1 mt-1`}>
          Subescapular (mm):
          <input
            type="number"
            className={`${lato_sub.className} border-1 p-1 w-full rounded-md mb-1`}
            value={subscapularis}
            onChange={(e) => handlePositiveInputChange(parseFloat(e.target.value), setSubscapularis)}
          />
        </label>
        <label className={`${lato.className} block mb-1 mt-1`}>
          Cresta ileal (mm):
          <input
            type="number"
            className={`${lato_sub.className} border-1 p-1 w-full rounded-md mb-1`}
            value={suprailiac}
            onChange={(e) => handlePositiveInputChange(parseFloat(e.target.value), setSuprailiac)}
          />
        </label>
        <label className={`${lato.className} block mb-1 mt-1`}>
          Biestiloideo (cm):
          <input
            type="number"
            className={`${lato_sub.className} border-1 p-1 w-full rounded-md mb-1`}
            value={bistyloid}
            onChange={(e) => handlePositiveInputChange(parseFloat(e.target.value), setBistyloid)}
          />
        </label>
        <label className={`${lato.className} block mb-1 mt-1`}>
          Femur (cm):
          <input
            type="number"
            className={`${lato_sub.className} border-1 p-1 w-full rounded-md mb-1`}
            value={femur}
            onChange={(e) => handlePositiveInputChange(parseFloat(e.target.value), setFemur)}
          />
        </label>
        <button
          type="submit"
          className="bg-primary w-full p-2 mt-2 rounded-md col-start-1 col-span-2
          uppercase hover:bg-terciary cursor-pointer"
        >
          Calcular
        </button>
        <button
          type="button"
          className="bg-primary w-full p-2 mt-2 rounded-md col-start-4 col-span-2
          uppercase hover:bg-terciary cursor-pointer"
          onClick={() => {
            localStorage.removeItem("bodyCompositionValues");
            setGender("");
            setTricep("");
            setBicep("");
            setSubscapularis("");
            setSuprailiac("");
            setBistyloid("");
            setFemur("");
            setHeight("");
            setWeight("");
            setAge("");
            setResult(null);
          }}
        >
          Limpiar Campos
        </button>
      </form>

      {result !== null && (
      <div>
        <Table
        result={result}
        result_kg={result_kg}
        bone_mass={bone_mass}
        por_bone_mass={por_bone_mass}
        residual_mass={residual_mass}
        por_residual_mass={por_residual_mass}
        composition={composition}
        por_composition={por_composition}
        />
        <div className="w-[1100px] h-screen flex gap-5 mx-auto my-auto">
          <PieChart
          result={result}
          por_bone_mass={por_bone_mass}
          por_residual_mass={por_residual_mass}
          por_composition={por_composition}
          />
          <BarChart
          result_kg={result_kg}
          bone_mass={bone_mass}
          residual_mass={residual_mass}
          composition={composition}
          />
        </div>
      </div>
        
      )}
      </div>
    </div>
  );
}



