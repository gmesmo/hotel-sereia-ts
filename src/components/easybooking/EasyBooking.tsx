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
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { ImWhatsapp } from "react-icons/im";

// Adicione os plugins de UTC e timezone
dayjs.extend(utc);
dayjs.extend(timezone);

// Configure o fuso horário para Brasília (BRT)
dayjs.tz.setDefault("America/Sao_Paulo");

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
  apartamentoSemServico: Apartamento[];
}

const EasyBooking: React.FC<EasyBookingProps> = ({
  apartamentosData,
  apartamentoSemServico,
}) => {
  const [pessoas, setPessoas] = useState<number | undefined>(1);
  const [crianca, setCrianca] = useState<number | undefined>(0);
  const [primeiraData, setPrimeiraData] = useState(dayjs());
  const [segundaData, setSegundaData] = useState(dayjs().add(1, "day"));
  const [diferenca, setDiferenca] = useState(
    segundaData.diff(primeiraData, "day")
  );
  const [isServico, setIsServico] = useState(true);
  const [isGaragem, setIsGaragem] = useState(true);

  const handlePessoasChange = (novoValor: number | number[]) => {
    const novoValorNumber = Array.isArray(novoValor) ? novoValor[0] : novoValor;
    setPessoas(novoValorNumber);
    console.log(apartamentoSemServico);
  };

  const handleCriancaChange = (novoValor: number | number[]) => {
    const novoValorNumber = Array.isArray(novoValor) ? novoValor[0] : novoValor;
    setCrianca(novoValorNumber);
    if (novoValorNumber + (pessoas || 1) > 5) {
      setPessoas(5 - novoValorNumber);
    }
  };

  const handleFirstDateChange = (novoValor: Dayjs | null) => {
    if (novoValor) {
      setPrimeiraData(novoValor);
      if (segundaData.isValid() && novoValor.isValid()) {
        const dayDiff = segundaData.diff(novoValor, "day");
        setDiferenca(dayDiff);
      }
    }
  };

  const handleSecondDateChange = (novoValor: Dayjs | null) => {
    if (novoValor) {
      setSegundaData(novoValor);
      if (primeiraData.isValid() && novoValor.isValid()) {
        const dayDiff = novoValor.diff(primeiraData, "day");
        setDiferenca(dayDiff);
      }
    }
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
            label={"Último dia"}
            value={segundaData}
            onChange={(novoValor) => {
              handleSecondDateChange(novoValor || dayjs());
            }}
            minDate={primeiraData.add(1, "day")}
          />
        </LocalizationProvider>
      </div>

      <p>
        Serviço incluso?{" "}
        <Switch
          defaultChecked
          value={isServico}
          onChange={() => {
            setIsServico(!isServico);
          }}
        />
      </p>
      <p>
        Garagem coberta?{" "}
        <Switch
          defaultChecked
          value={isGaragem}
          onChange={() => {
            setIsGaragem(!isGaragem);
          }}
        />
      </p>

      <div className={styles.Options}>
        {(isServico ? apartamentosData : apartamentoSemServico).map(
          (ap, index) => {
            let key = `${pessoas}pessoa`;
            let disc = 0;
            if (pessoas !== 1) {
              key = `${pessoas}pessoas`;
            }
            if (crianca === 1) {
              disc = 10;
            } else if (crianca === 2) {
              disc = 15;
            } else if (crianca === 3) {
              disc = 20;
            }

            const desconto =
              (parseFloat(ap[key as keyof Apartamento]) +
                (isGaragem ? 30 : 0)) *
              diferenca *
              (disc / 100);

            const valorFinal =
              (parseFloat(ap[key as keyof Apartamento]) +
                (isGaragem ? 30 : 0)) *
                diferenca -
              desconto;

            if (ap[key as keyof Apartamento] !== " - ") {
              return (
                <button key={`opc${index}`} className={styles.buttonOption}>
                  <span className={styles.apNome}>{ap.nome}</span>
                  <span className={styles.apPreco}>R$ {valorFinal}</span>
                  <span className={styles.apMessage}>
                    <ImWhatsapp /> Reserve
                  </span>
                </button>
              );
            }
          }
        )}
        {!isServico && pessoas === 1 && (
          <div style={{ color: "red" }}>
            Não há opções disponíveis nessa seleção
          </div>
        )}
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
