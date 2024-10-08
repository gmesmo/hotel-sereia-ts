import React, { useEffect, useState } from "react";

import Slider from "@mui/material/Slider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Switch from "@mui/material/Switch";
import "@mui/material/styles";
import "dayjs/locale/pt";
import { ImWhatsapp } from "react-icons/im";
import styles from "./EasyBooking.module.css";
import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import { useTranslation } from "react-i18next";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Sao_Paulo");
dayjs.extend(isBetween);
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
  inicioTemporada: Date;
  fimTemporada: Date;
  viewTemporada: boolean;
}

const EasyBooking: React.FC<EasyBookingProps> = ({
  apartamentosData,
  apartamentoSemServico,
  inicioTemporada,
  fimTemporada,
  viewTemporada,
}) => {
  const { t } = useTranslation();

  const [pessoas, setPessoas] = useState<number>(1);
  const [crianca, setCrianca] = useState<number>(0);

  const [primeiraData, setPrimeiraData] = useState(dayjs().startOf("day"));
  const [segundaData, setSegundaData] = useState(
    dayjs().add(1, "day").startOf("day")
  );
  let isSegundaDataChosen = false;

  const inicioDayjs = inicioTemporada;
  const fimDayjs = fimTemporada;

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
      setPrimeiraData(novoValor.startOf("day")); // Configura a data no início do dia
      if (segundaData.isValid() && novoValor.isValid()) {
        const dayDiff = segundaData.startOf("day").diff(novoValor, "day"); // Configura também a segunda data no início do dia
        setDiferenca(dayDiff);
      }
    }
  };

  const handleSecondDateChange = (novoValor: Dayjs | null) => {
    if (novoValor) {
      setSegundaData(novoValor.startOf("day")); // Configura a data no início do dia
      if (primeiraData.isValid() && novoValor.isValid()) {
        const dayDiff = novoValor.startOf("day").diff(primeiraData, "day"); // Configura também a primeira data no início do dia
        setDiferenca(dayDiff);
        isSegundaDataChosen = true;
      }
    }
  };

  useEffect(() => {
    if (!isSegundaDataChosen) {
      const novaSegundaData = primeiraData.add(1, "day").startOf("day");
      setSegundaData(novaSegundaData);
      setDiferenca(novaSegundaData.diff(primeiraData, "day")); // Atualiza a diferença também
    }
  }, [primeiraData]);

  const bookHandler = (
    apName: string,
    pessoasNum: number,
    crianca: number,
    data1: string,
    data2: string,
    servico: boolean,
    garagem: boolean
  ) => {
    const message = `Olá! Gostaria de fazer uma reserva para%0A*${apName}*%0APara ${pessoasNum} pessoa(s) ${
      crianca > 0 ? ` e ${crianca} crianca(s)` : ""
    }%0A%0APeríodo:%0AInício: ${data1}%0AFim: ${data2}%0A%0A${
      servico ? `Com Serviço` : `Sem Serviço`
    }%0A${garagem ? `Com Garagem` : `Sem Garagem`}
    `;

    const url = `https://wa.me/555193383992?text=${message}`;
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className={styles.EasyBooking}>
      <p className={styles.EasyHeading}>
        {t("page.booking.easyBooking.title")}
      </p>

      <div className={styles.SliderWrapper}>
        <label htmlFor="valor">{t("page.booking.easyBooking.adults")}</label>
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
        <label htmlFor="valor">{t("page.booking.easyBooking.children")}</label>
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

      <span className={styles.disc}>
        {t("page.booking.easyBooking.childrenDisclaimer")}
      </span>

      <label>{t("page.booking.easyBooking.selectDate")}</label>
      <div className={styles.DatesWrapper}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt">
          <DatePicker
            disablePast
            label={t("page.booking.easyBooking.firstDay")}
            value={primeiraData}
            onChange={(novoValor) => {
              handleFirstDateChange(novoValor);
            }}
          />
          <DatePicker
            label={t("page.booking.easyBooking.lastDay")}
            onChange={(novoValor) => {
              handleSecondDateChange(novoValor);
            }}
            minDate={primeiraData.add(1, "day")}
          />
        </LocalizationProvider>
      </div>

      <p>
        {
          //Verifica se primeiraData está entre inicioDayjs e fimDayjs
          ((primeiraData.isBetween(inicioDayjs, fimDayjs) ||
            segundaData.isBetween(inicioDayjs, fimDayjs)) &&
            !viewTemporada) ||
            (!(
              primeiraData.isBetween(inicioDayjs, fimDayjs) ||
              segundaData.isBetween(inicioDayjs, fimDayjs)
            ) &&
              viewTemporada && (
                <span style={{ color: "red" }}>
                  {t("page.booking.easyBooking.differentPrices")}
                </span>
              ))
        }
      </p>

      <p>
        {t("page.booking.easyBooking.services")}
        <Switch
          defaultChecked
          value={isServico}
          onChange={() => {
            setIsServico(!isServico);
          }}
        />
      </p>
      <p>
        {t("page.booking.easyBooking.garage")}
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
            let key = `${(pessoas || 1) + (crianca || 0)}pessoa`;
            let disc = 0;
            if ((pessoas || 1) + (crianca || 0) !== 1) {
              key = `${(pessoas || 1) + (crianca || 0)}pessoas`;
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
                  <span
                    className={styles.apMessage}
                    onClick={() =>
                      bookHandler(
                        ap.nome,
                        pessoas,
                        crianca,
                        primeiraData.format("DD/MM/YYYY"),
                        segundaData.format("DD/MM/YYYY"),
                        isServico,
                        isGaragem
                      )
                    }
                  >
                    <ImWhatsapp /> {t("page.booking.easyBooking.book")}
                  </span>
                </button>
              );
            }
          }
        )}
        {!isServico && pessoas === 1 && (
          <div style={{ color: "red", margin: "2rem" }}>
            {t("page.booking.easyBooking.noOptions")}
          </div>
        )}
      </div>

      <p className={styles.obs}>
        {t("page.booking.easyBooking.disclaimer.part1")}
      </p>
      <p className={styles.obs}>
        {t("page.booking.easyBooking.disclaimer.part2")}
      </p>
    </div>
  );
};

export default EasyBooking;
