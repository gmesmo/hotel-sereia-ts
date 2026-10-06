import { useState, useMemo } from "react";
import Slider from "@mui/material/Slider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Switch from "@mui/material/Switch";
import "@mui/material/styles";
import "dayjs/locale/pt";
import "dayjs/locale/es";
import { ImWhatsapp } from "react-icons/im";
import styles from "./EasyBookingV2.module.css";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useTranslation } from "react-i18next";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Sao_Paulo");

export interface Apartamento {
  nome: string;
  "1pessoa": string;
  "2pessoas": string;
  "3pessoas": string;
  "4pessoas": string;
  "5pessoas": string;
}

export interface EasyBookingV2Props {
  apartamentosDataBaixa: Apartamento[];
  apartamentosDataAlta: Apartamento[];
  apartamentoSemServicoBaixa: Apartamento[];
  apartamentoSemServicoAlta: Apartamento[];
  inicioTemporada: Date;
  fimTemporada: Date;
}

const parsePreco = (precoStr: string | undefined): number | null => {
  if (!precoStr || precoStr.trim() === "-" || precoStr.includes("-")) {
    return null;
  }
  const limpo = precoStr.replace(/\./g, "").replace(",", ".").trim();
  const num = parseFloat(limpo);
  return isNaN(num) ? null : num;
};

const formatCurrency = (val: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(val);
};

const EasyBookingV2: React.FC<EasyBookingV2Props> = ({
  apartamentosDataBaixa,
  apartamentosDataAlta,
  apartamentoSemServicoBaixa,
  apartamentoSemServicoAlta,
  inicioTemporada,
  fimTemporada,
}) => {
  const { t, i18n } = useTranslation();
  const isEs = i18n.language?.startsWith("es");

  const [pessoas, setPessoas] = useState<number>(1);
  const [crianca, setCrianca] = useState<number>(0);

  const [primeiraData, setPrimeiraData] = useState<Dayjs>(dayjs().startOf("day"));
  const [segundaData, setSegundaData] = useState<Dayjs>(
    dayjs().add(1, "day").startOf("day")
  );

  const [isServico, setIsServico] = useState<boolean>(true);
  const [isGaragem, setIsGaragem] = useState<boolean>(true);

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

  const handleFirstDateChange = (novoValor: Dayjs | null) => {
    if (novoValor && novoValor.isValid()) {
      const novaData = novoValor.startOf("day");
      setPrimeiraData(novaData);
      // Se a segunda data for anterior ou igual à primeira data, ajusta automaticamente
      if (!segundaData.isAfter(novaData, "day")) {
        setSegundaData(novaData.add(1, "day"));
      }
    }
  };

  const handleSecondDateChange = (novoValor: Dayjs | null) => {
    if (novoValor && novoValor.isValid()) {
      setSegundaData(novoValor.startOf("day"));
    }
  };

  // Análise detalhada das diárias selecionadas
  const infoDiarias = useMemo(() => {
    const inicioDay = primeiraData.startOf("day");
    const fimDay = segundaData.startOf("day");
    const qtdDiarias = fimDay.diff(inicioDay, "day");

    if (qtdDiarias <= 0) {
      return {
        qtdDiarias: 0,
        noitesAlta: 0,
        noitesBaixa: 0,
        diasDetalhes: [] as Array<{ data: Dayjs; isAlta: boolean }>,
      };
    }

    const inicioTempDay = dayjs(inicioTemporada).startOf("day");
    const fimTempDay = dayjs(fimTemporada).startOf("day");

    let noitesAlta = 0;
    let noitesBaixa = 0;
    const diasDetalhes: Array<{ data: Dayjs; isAlta: boolean }> = [];

    for (let i = 0; i < qtdDiarias; i++) {
      const dataNoite = inicioDay.add(i, "day");
      // Alta temporada se estiver dentro do intervalo (inclusive início e fim)
      const isAlta =
        !dataNoite.isBefore(inicioTempDay, "day") &&
        !dataNoite.isAfter(fimTempDay, "day");

      if (isAlta) {
        noitesAlta++;
      } else {
        noitesBaixa++;
      }
      diasDetalhes.push({ data: dataNoite, isAlta });
    }

    return {
      qtdDiarias,
      noitesAlta,
      noitesBaixa,
      diasDetalhes,
    };
  }, [primeiraData, segundaData, inicioTemporada, fimTemporada]);

  const listaBaixa = isServico
    ? apartamentosDataBaixa
    : apartamentoSemServicoBaixa;
  const listaAlta = isServico ? apartamentosDataAlta : apartamentoSemServicoAlta;

  // Cálculo individual para cada apartamento
  const opcoesCalculadas = useMemo(() => {
    const { qtdDiarias, diasDetalhes } = infoDiarias;
    if (qtdDiarias <= 0) return [];

    const totalHospedes = (pessoas || 1) + (crianca || 0);
    const key =
      totalHospedes === 1
        ? "1pessoa"
        : (`${totalHospedes}pessoas` as keyof Apartamento);

    let percentualDesconto = 0;
    if (crianca === 1) percentualDesconto = 0.1;
    else if (crianca === 2) percentualDesconto = 0.15;
    else if (crianca === 3) percentualDesconto = 0.2;

    return listaBaixa.map((apBaixa, index) => {
      const apAlta =
        listaAlta.find((a) => a.nome === apBaixa.nome) || listaAlta[index];

      let subtotalDiarias = 0;
      let isDisponivel = true;

      for (const dia of diasDetalhes) {
        const apAlvo = dia.isAlta ? apAlta : apBaixa;
        if (!apAlvo) {
          isDisponivel = false;
          break;
        }
        const precoStr = apAlvo[key];
        const precoNum = parsePreco(precoStr);
        if (precoNum === null) {
          isDisponivel = false;
          break;
        }
        subtotalDiarias += precoNum;
      }

      if (!isDisponivel) {
        return {
          apNome: apBaixa.nome,
          disponivel: false,
          valorFinal: 0,
        };
      }

      const valorGaragem = (isGaragem ? 40 : 0) * qtdDiarias;
      const subtotalComGaragem = subtotalDiarias + valorGaragem;
      const desconto = subtotalComGaragem * percentualDesconto;
      const valorFinal = subtotalComGaragem - desconto;

      return {
        apNome: apBaixa.nome,
        disponivel: true,
        valorFinal,
      };
    });
  }, [infoDiarias, isServico, isGaragem, pessoas, crianca, listaBaixa, listaAlta]);

  const bookHandler = (
    apNome: string,
    pessoasNum: number,
    criancaNum: number,
    data1: string,
    data2: string,
    servico: boolean,
    garagem: boolean,
    valorFinal: number
  ) => {
    const { qtdDiarias, noitesAlta, noitesBaixa } = infoDiarias;

    let resumoTemporada = "";
    if (noitesAlta > 0 && noitesBaixa > 0) {
      resumoTemporada = t("page.booking.easyBooking.whatsapp.seasonMixed", {
        low: noitesBaixa,
        high: noitesAlta,
      });
    } else if (noitesAlta > 0) {
      resumoTemporada = t("page.booking.easyBooking.whatsapp.seasonHigh", {
        high: noitesAlta,
      });
    } else {
      resumoTemporada = t("page.booking.easyBooking.whatsapp.seasonLow", {
        low: noitesBaixa,
      });
    }

    const hospedesStr = `${pessoasNum} ${t(
      pessoasNum === 1
        ? "page.booking.easyBooking.whatsapp.adult"
        : "page.booking.easyBooking.whatsapp.adults"
    )}${
      criancaNum > 0
        ? ` ${t("page.booking.easyBooking.whatsapp.and")} ${criancaNum} ${t(
            criancaNum === 1
              ? "page.booking.easyBooking.whatsapp.child"
              : "page.booking.easyBooking.whatsapp.children"
          )}`
        : ""
    }`;

    const servicoStr = servico
      ? t("page.booking.easyBooking.whatsapp.withService")
      : t("page.booking.easyBooking.whatsapp.withoutService");

    const garagemStr = garagem
      ? t("page.booking.easyBooking.whatsapp.withGarage")
      : t("page.booking.easyBooking.whatsapp.withoutGarage");

    const message = `${t("page.booking.easyBooking.whatsapp.greeting")}
*${apNome}*
${t("page.booking.easyBooking.whatsapp.guests")} ${hospedesStr}

${t("page.booking.easyBooking.whatsapp.period")} ${data1} ${t(
      "page.booking.easyBooking.whatsapp.to"
    )} ${data2} (${qtdDiarias} ${t(
      qtdDiarias === 1
        ? "page.booking.easyBooking.whatsapp.night"
        : "page.booking.easyBooking.whatsapp.nights"
    )})
${t("page.booking.easyBooking.whatsapp.type")} ${resumoTemporada}

${servicoStr}
${garagemStr}

*${t("page.booking.easyBooking.whatsapp.estimatedTotal")}* ${formatCurrency(
      valorFinal
    )}`;

    const url = `https://wa.me/555193383992?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noreferrer");
  };

  const { qtdDiarias, noitesAlta, noitesBaixa } = infoDiarias;

  return (
    <div className={styles.EasyBooking}>
      <p className={styles.EasyHeading}>
        {t("page.booking.easyBooking.title")}
      </p>

      <div className={styles.SliderWrapper}>
        <label htmlFor="valor">{t("page.booking.easyBooking.adults")}</label>
        <Slider
          name="pessoas"
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
          name="criancas"
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

      <label style={{ fontWeight: 600, color: "#333", marginBottom: "0.5rem" }}>
        {t("page.booking.easyBooking.selectDate")}
      </label>
      <div className={styles.DatesWrapper}>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale={isEs ? "es" : "pt"}
        >
          <DatePicker
            disablePast
            label={t("page.booking.easyBooking.firstDay")}
            value={primeiraData}
            onChange={(novoValor) => handleFirstDateChange(novoValor)}
          />
          <DatePicker
            label={t("page.booking.easyBooking.lastDay")}
            value={segundaData}
            onChange={(novoValor) => handleSecondDateChange(novoValor)}
            minDate={primeiraData.add(1, "day")}
          />
        </LocalizationProvider>
      </div>

      {/* Card inteligente informando a composição das diárias */}
      <div
        className={`${styles.seasonInfoCard} ${
          noitesAlta > 0 && noitesBaixa > 0
            ? styles.mixedSeason
            : noitesAlta > 0
            ? styles.highSeason
            : styles.lowSeason
        }`}
      >
        <div className={styles.seasonHeader}>
          <span>
            {t(
              qtdDiarias === 1
                ? "page.booking.easyBooking.season.nightSelected"
                : "page.booking.easyBooking.season.nightsSelected",
              { count: qtdDiarias }
            )}
          </span>
          <span
            className={`${styles.seasonBadge} ${
              noitesAlta > 0 && noitesBaixa > 0
                ? styles.seasonBadgeMixed
                : noitesAlta > 0
                ? styles.seasonBadgeHigh
                : styles.seasonBadgeLow
            }`}
          >
            {noitesAlta > 0 && noitesBaixa > 0
              ? `🗓️ ${t("page.booking.easyBooking.season.badgeMixed")}`
              : noitesAlta > 0
              ? `☀️ ${t("page.booking.easyBooking.season.badgeHigh")}`
              : `🌴 ${t("page.booking.easyBooking.season.badgeLow")}`}
          </span>
        </div>
        <div className={styles.seasonDetails}>
          {noitesAlta > 0 && noitesBaixa > 0 ? (
            <span>
              {t("page.booking.easyBooking.season.detailsMixed", {
                low: noitesBaixa,
                high: noitesAlta,
              })}
            </span>
          ) : noitesAlta > 0 ? (
            <span>
              {t("page.booking.easyBooking.season.detailsHigh", {
                high: noitesAlta,
              })}
            </span>
          ) : (
            <span>
              {t("page.booking.easyBooking.season.detailsLow", {
                low: noitesBaixa,
              })}
            </span>
          )}
        </div>
      </div>

      <div className={styles.switchesContainer}>
        <div className={styles.switchItem}>
          <span>{t("page.booking.easyBooking.services")}</span>
          <Switch
            checked={isServico}
            onChange={() => setIsServico(!isServico)}
          />
        </div>
        <div className={styles.switchItem}>
          <span>{t("page.booking.easyBooking.garage")}</span>
          <Switch
            checked={isGaragem}
            onChange={() => setIsGaragem(!isGaragem)}
          />
        </div>
      </div>

      <div className={styles.Options}>
        {opcoesCalculadas.map((opcao, index) => {
          if (!opcao.disponivel) return null;

          return (
            <div key={`opcV2_${index}`} className={styles.buttonOption}>
              <span className={styles.apNome}>{opcao.apNome}</span>
              <div className={styles.apPrecoContainer}>
                <span className={styles.apPreco}>
                  {formatCurrency(opcao.valorFinal)}
                </span>
                <span className={styles.apSubinfo}>
                  {t("page.booking.easyBooking.card.total")} ({qtdDiarias}{" "}
                  {t(
                    qtdDiarias === 1
                      ? "page.booking.easyBooking.card.night"
                      : "page.booking.easyBooking.card.nights"
                  )})
                </span>
              </div>
              <span
                className={styles.apMessage}
                onClick={() =>
                  bookHandler(
                    opcao.apNome,
                    pessoas,
                    crianca,
                    primeiraData.format("DD/MM/YYYY"),
                    segundaData.format("DD/MM/YYYY"),
                    isServico,
                    isGaragem,
                    opcao.valorFinal
                  )
                }
              >
                <ImWhatsapp /> {t("page.booking.easyBooking.book")}
              </span>
            </div>
          );
        })}

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

export default EasyBookingV2;

