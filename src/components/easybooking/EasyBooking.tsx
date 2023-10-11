import React, { useState } from "react";

import Slider from "@mui/material/Slider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Switch from "@mui/material/Switch";
import "@mui/material/styles";
import "dayjs/locale/pt";

import styles from "./EasyBooking.module.css";
import dayjs, { Dayjs } from "dayjs";

interface Apartamento {
  nome: string;
  "1pessoa": string;
  "2pessoas": string;
  "3pessoas": string;
  "4pessoas": string;
  "5pessoas": string;
}

interface EasyBookingProps {
  apartamentosData: Apartamento[];
}

const EasyBooking: React.FC<EasyBookingProps> = ({ apartamentosData }) => {
  const [pessoas, setPessoas] = useState<number | undefined>(1);
  const [crianca, setCrianca] = useState<number | undefined>(0);
  const [primeiraData, setPrimeiraData] = useState(dayjs());
  const [segundaData, setSegundaData] = useState(dayjs().add(1, "day"));
  const [diferenca, setDiferenca] = useState(1);

  const handlePessoasChange = (novoValor: number | number[]) => {
    const novoValorNumber = Array.isArray(novoValor) ? novoValor[0] : novoValor;
    setPessoas(novoValorNumber);
  };

  const handleCriancaChange = (novoValor: number | number[]) => {
    const novoValorNumber = Array.isArray(novoValor) ? novoValor[0] : novoValor;
    setCrianca(novoValorNumber);
    if (novoValorNumber + (pessoas || 1) > 5) {
      setPessoas(5 - novoValorNumber);
    }
  };

  const handleFirstDateChange = (novoValor: Dayjs) => {
    setPrimeiraData(dayjs(novoValor));
    const dayDiff = segundaData.diff(novoValor, "day");
    setDiferenca(dayDiff);
  };

  const handleSecondDateChange = (novoValor: Dayjs) => {
    setSegundaData(dayjs(novoValor));
    const dayDiff = novoValor.diff(primeiraData, "day");
    setDiferenca(dayDiff);
  };

  return (
    <div className={styles.EasyBooking}>
      <p className={styles.EasyHeading}>Seletor facilitado</p>

      <div className={styles.SliderWrapper}>
        <label htmlFor="valor">Número de Adultos:</label>
        <Slider
          name={"pessoas"}
          value={pessoas || 1}
          min={1}
          max={5 - (crianca || 0)}
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
      <label>Selecione o período</label>
      <div className={styles.DatesWrapper}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt">
          <DatePicker
            disablePast
            label={"Primeiro dia"}
            value={primeiraData}
            onChange={(novoValor) => {
              handleFirstDateChange(novoValor || dayjs());
            }}
          />
          <DatePicker
            disablePast
            label={"Último dia"}
            value={segundaData}
            onChange={(novoValor) => {
              handleSecondDateChange(novoValor || dayjs());
            }}
          />
        </LocalizationProvider>
      </div>

      <p>
        Serviço incluso? <Switch defaultChecked />
      </p>
      <p>
        Garagem coberta? <Switch defaultChecked />
      </p>

      <div className={styles.Options}>
        {apartamentosData.map((ap, index) => {
          let key = `${pessoas}pessoa`;
          if (pessoas !== 1) {
            key = `${pessoas}pessoas`;
          }

          if (ap[key as keyof Apartamento] !== " - ") {
            return (
              <button key={`opc${index}`} className={styles.buttonOption}>
                {ap.nome}
                {parseFloat(ap[key as keyof Apartamento]) * diferenca}
              </button>
            );
          }
        })}
      </div>

      <p className={styles.obs}>
        Serviço: Café da manhã, roupas de cama e banho e serviço de limpeza
        diária
      </p>
      <p className={styles.obs}>
        Taxa de limpeza ao final da estadia: R$ 180,00
      </p>
    </div>
  );
};

export default EasyBooking;
