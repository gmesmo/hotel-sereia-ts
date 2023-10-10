import React, { useState } from "react";

import Slider from "@mui/material/Slider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "@mui/material/styles";

import styles from "./EasyBooking.module.css";

const EasyBooking: React.FC = () => {
  const [pessoas, setPessoas] = useState<number | undefined>(1);

  const [crianca, setCrianca] = useState<number | undefined>(0);

  const handleValorChange = (event: Event, novoValor: number | number[]) => {
    console.log(event);

    setPessoas(Array.isArray(novoValor) ? novoValor[0] : novoValor);
  };

  return (
    <div className={styles.EasyBooking}>
      <p className={styles.EasyHeading}>Seletor facilitado</p>

      <div className={styles.SliderWrapper}>
        <label htmlFor="valor">Número de Pessoas:</label>
        <Slider
          value={pessoas || 1}
          min={1}
          max={5}
          step={1}
          onChange={handleValorChange}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => value.toString()}
        />
      </div>

      {/* <div className={styles.SliderWrapper}>
        <label htmlFor="valor">Número de Pessoas:</label>
        <Slider
          value={pessoas || 1}
          min={1}
          max={5}
          step={1}
          onChange={handleValorChange}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => value.toString()}
        />
      </div> */}
      <p>Valor selecionado: {pessoas}</p>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker />
      </LocalizationProvider>
    </div>
  );
};

export default EasyBooking;
