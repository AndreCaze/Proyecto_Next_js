import React, { useState } from "react";
import { Kanit, Lato } from 'next/font/google';

//Variables of the imported Google Fonts
const kanit = Kanit({ subsets: ['latin'], weight: ["600"], style: ["normal"] });
const lato = Lato({subsets: ['latin'], weight: ["900"], style: ["normal"] });
const lato_sub = Lato({subsets: ['latin'], weight: ["400"], style: ["normal"] });

//Form Component
export default function Form ({ calculateDensity }) {
  const [inputValues, setInputValues] = useState({
    gender: "",
    weight: "",
    size: "",
    age: "",
    bicep: "",
    tricep: "",
    subscapular: "",
    suprailiac: "",
    femur: "",
    bistyloid: "",
  });

  //Handler of the Inputs
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    let parsedValue = value;

    if (type === "number" && value !== "") {
      parsedValue = parseFloat(value);
    }

    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: parsedValue,
    }));
  };

  //Submit to obtain the calculated data
  const handleSubmit = (e) => {
    e.preventDefault();

    calculateDensity(inputValues);
  };

  return (
    <div>
      <h1 className={`${kanit.className} font-bold text-center text-xl`}>Composición corporal</h1>
      <form className="grid grid-cols-4 gap-4 mt-4" onSubmit={handleSubmit}>
      <label className={`${lato.className} border-1 p-1 w-full rounded-md mb-1`}>
          Género:
          <select
            onChange={handleInputChange}
            className={`${lato_sub.className} border-1 w-full ml-2 rounded-md`}>
            <option type="option" name="gender" value="">Seleccionar</option>
            <option type="option" name="gender" value="hombre">Hombre</option>
            <option type="option" name="gender" value="mujer">Mujer</option>
          </select>
        </label>
        <label className={`${lato.className} block mb-1 mt-1`}>
          Peso (Kg):
          <input
            type="number"
            name="weight"
            className={`${lato_sub.className} border-1 p-1 w-full rounded-md mb-1`}
            value={inputValues.weight}
            onChange={handleInputChange}
          />
        </label>
        <label className={`${lato.className} block mb-1 mt-1`}>
          Altura/Talla (cm):
          <input
            type="number"
            name="size"
            className={`${lato_sub.className} border-1 p-1 w-full rounded-md mb-1`}
            value={inputValues.size}
            onChange={handleInputChange}
          />
        </label>
        <label className={`${lato.className} block mb-1 mt-1`}>
          Edad (Años):
          <input
            type="number"
            name="age"
            className={`${lato_sub.className} border-1 p-1 w-full rounded-md mb-1`}
            value={inputValues.age}
            onChange={handleInputChange}
          />
        </label>
        <label className={`${lato.className} block mb-1 mt-1`}>
          Bíceps (mm):
          <input
            type="number"
            name="bicep"
            className={`${lato_sub.className} border-1 p-1 w-full rounded-md mb-1`}
            value={inputValues.bicep}
            onChange={handleInputChange}
          />
        </label>
        <label className={`${lato.className} block mb-1 mt-1`}>
          Tríceps (mm):
          <input
            type="number"
            name="tricep"
            className={`${lato_sub.className} border-1 p-1 w-full rounded-md mb-1`}
            value={inputValues.tricep}
            onChange={handleInputChange}
          />
        </label>
        <label className={`${lato.className} block mb-1 mt-1`}>
          Subescapular (mm):
          <input
            type="number"
            name="subscapular"
            className={`${lato_sub.className} border-1 p-1 w-full rounded-md mb-1`}
            value={inputValues.subscapular}
            onChange={handleInputChange}
          />
        </label>
        <label className={`${lato.className} block mb-1 mt-1`}>
          Cresta ileal (mm):
          <input
            type="number"
            name="suprailiac"
            className={`${lato_sub.className} border-1 p-1 w-full rounded-md mb-1`}
            value={inputValues.suprailiac}
            onChange={handleInputChange}
          />
        </label>
        <label className={`${lato.className} block mb-1 mt-1`}>
          Biestiloideo (cm):
          <input
            type="number"
            name="bistyloid"
            className={`${lato_sub.className} border-1 p-1 w-full rounded-md mb-1`}
            value={inputValues.bistyloid}
            onChange={handleInputChange}
          />
        </label>
        <label className={`${lato.className} block mb-1 mt-1`}>
          Femur (cm):
          <input
            type="number"
            name="femur"
            className={`${lato_sub.className} border-1 p-1 w-full rounded-md mb-1`}
            value={inputValues.femur}
            onChange={handleInputChange}
          />
        </label>
        <button
          type="submit"
          className="bg-primary w-full p-2 mt-2 rounded-md col-start-2 col-span-2
          uppercase hover:bg-terciary cursor-pointer"
        >
          Calcular
        </button>
      </form>
    </div>
  );
};