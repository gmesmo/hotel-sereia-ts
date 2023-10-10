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

  const handlePessoasChange = (novoValor: number | number[]) => {
    const novoValorNumber = Array.isArray(novoValor) ? novoValor[0] : novoValor;
    setPessoas(novoValorNumber);
    if (crianca >= novoValorNumber - 1) {
      setCrianca(novoValorNumber - 1);
    }
  };

  const handleCriancaChange = (novoValor: number | number[]) => {
    const novoValorNumber = Array.isArray(novoValor) ? novoValor[0] : novoValor;
    const valor =
      novoValorNumber <= pessoas - 1 ? novoValorNumber : pessoas - 1;
    setCrianca(valor);
  };

  return (
    <div className={styles.EasyBooking}>
      <p className={styles.EasyHeading}>Seletor facilitado</p>

      <div className={styles.SliderWrapper}>
        <label htmlFor="valor">Número total de pessoas:</label>
        <Slider
          name={"pessoas"}
          value={pessoas || 1}
          min={1}
          max={5}
          step={1}
          onChange={(_, novoValor) => handlePessoasChange(novoValor)}
          valueLabelDisplay="on"
          valueLabelFormat={(value) => value.toString()}
        />
      </div>

      <div className={styles.SliderWrapper}>
        <label htmlFor="valor">Número de Crianças:</label>
        <Slider
          name={"criancas"}
          value={crianca || 0}
          min={0}
          max={3}
          step={1}
          onChange={(_, novoValor) => handleCriancaChange(novoValor)}
          valueLabelDisplay="on"
          valueLabelFormat={(value) => value.toString()}
        />
      </div>
      <p>Valor selecionado: {pessoas}</p>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker />
      </LocalizationProvider>
    </div>
  );
};

export default EasyBooking;
