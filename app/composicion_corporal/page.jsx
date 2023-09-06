"use client";
import React, { useState } from "react";
//Import of the Modulated Components
import Table from '@/components/Table';
import Form from '@/components/Form';
import PieChart from '@/components/PieChart';
import BarChart from '@/components/BarChart';

//Muscular Calculator Page
export default function Composition() {
  //useState variable for the density
  const [density, setDensity] = useState(null);

  //useState Object for the 4 type of masses in percentage (%)
  const [percentages, setPercentages] = useState({
    bone_mass: null,
    fat_mass: null,
    residual_mass: null,
    muscular_mass: null,
  });

   //useState Object for the 4 type of masses in Kilograms (Kg)
  const [masses, setMasses] = useState({
    bone_mass: null,
    fat_mass: null,
    residual_mass: null,
    muscular_mass: null,
  });

  //Funtion that calculates the data received form the Form
  const calculateDensity = (inputValues) => {
    const {
      gender,
      bicep,
      tricep,
      subscapular,
      suprailiac,
      femur,
      bistyloid,
      size,
      weight,
    } = inputValues;

    //Total Sum of the 4 types of folds
    const foldsSum = tricep + bicep + subscapular + suprailiac;

    //Section where the Bone mass is calculated
    const calculateBoneMass = () => {
      return (
        Math.pow(
          Math.pow(size/100, 2) * (femur / 100) * (bistyloid / 100) * 400,
          0.712
        ) * 3.02
      );
    };

    //Section where the Density and the Residual Mass is calculated
    const calculateDensityAndResidual = () => {
      const bodyDensity =
        gender === "hombre"
          ? 1.1765 - 0.0744 * Math.log10(foldsSum)
          : 1.1567 - 0.0717 * Math.log10(foldsSum);

      const residual = gender === "hombre" ? weight * 0.24 : weight * 0.21;

      return { bodyDensity, residual };
    };

    //Section where we get and set the percentages and the other to types of masses
    const densityAndMass = () => {
      const { bodyDensity, residual } = calculateDensityAndResidual();
      setDensity(bodyDensity);

      //Percentages
      const fat = 495 / bodyDensity - 450;
      const boneMassPercentage = (calculateBoneMass() * 100) / weight;
      const residualMassPercentage = (residual * 100) / weight;
      const muscularMassPercentage =
        100 - (fat + boneMassPercentage + residualMassPercentage);

      //Masses
      const fatMassKilos = weight * (fat / 100);
      const muscularMassKilos =
        weight - (fatMassKilos + calculateBoneMass() + residual);

      setMasses((prevValues) => ({
        ...prevValues,
        bone_mass: calculateBoneMass(),
        fat_mass: fatMassKilos,
        muscular_mass: muscularMassKilos,
        residual_mass: residual,
      }));

      setPercentages((prevValues) => ({
        ...prevValues,
        bone_mass: boneMassPercentage,
        fat_mass: fat,
        muscular_mass: muscularMassPercentage,
        residual_mass: residualMassPercentage,
      }));
    };

    densityAndMass();
  };

  return (
    <div className="bg-primary h-screen w-screen flex flex-col items-center justify-start overflow-y-scroll">
      <div  className='m-[20px] p-[15px]  bg-secundary rounded-md text-black'>
      <Form calculateDensity={calculateDensity} />
      {density && (
        <div>
          <Table percentages={percentages} masses={masses} />
          <div className="w-[100%] h-screen flex gap-5 mx-auto my-auto">
            <PieChart percentages={percentages} />
            <BarChart masses={masses} />

          </div>
        </div>
      )}
      </div>
    </div>
  );
};



