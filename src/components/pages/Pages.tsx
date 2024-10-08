import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Line from "./line";
import styles from "./pages.module.css";
import { Button } from "../buttons/Button";

import { ImWhatsapp } from "react-icons/im";
import { BsPhoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
<<<<<<< HEAD

import { Checkbox } from "@mui/material";
=======
import EasyBooking from "../easybooking/EasyBooking";
>>>>>>> parent of 00e1fc7 (Adição tabela baixa/alta temporada com seletor e aviso)

const spanStyle: React.CSSProperties = {
  padding: "20px",
  background: "#000000aa",
  color: "#FFFFFF",
  position: "absolute",
  width: "100%",
  textAlign: "center",
  fontWeight: "300",
  fontFamily: "var(--ff-text)",
  letterSpacing: "3px",
};

const divStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "last baseline",
  justifyContent: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "450px",
  padding: "1rem",
};

interface PageProps {
  aviso: string;
}

function HomePage({ aviso }: PageProps) {
  const { t } = useTranslation();

  const Atracoes: string[] = [
    t("page.home.features.1"),
    t("page.home.features.2"),
    t("page.home.features.3"),
    t("page.home.features.4"),
    t("page.home.features.5"),
    t("page.home.features.6"),
    t("page.home.features.7"),
    t("page.home.features.8"),
    t("page.home.features.9"),
    t("page.home.features.10"),
    t("page.home.features.11"),
  ];

  const slideImages = [
    {
      url: "./mais_fotos/patio_piscina.jpg",
      caption: t("page.home.imagesDescriptions.1"),
    },
    {
      url: "./img-1.jpg",
      caption: t("page.home.imagesDescriptions.2"),
    },
    {
      url: "./img-2.jpg",
      caption: t("page.home.imagesDescriptions.3"),
    },
    {
      url: "./img-3.jpg",
      caption: t("page.home.imagesDescriptions.4"),
    },
    {
      url: "./img-4.jpg",
      caption: t("page.home.imagesDescriptions.5"),
    },
    {
      url: "./img-5.jpg",
      caption: t("page.home.imagesDescriptions.6"),
    },
    {
      url: "./img-6.jpg",
      caption: t("page.home.imagesDescriptions.7"),
    },
    {
      url: "./img-7.jpg",
      caption: t("page.home.imagesDescriptions.8"),
    },
    {
      url: "./img-8.jpg",
      caption: t("page.home.imagesDescriptions.9"),
    },
    {
      url: "./img-9.jpg",
      caption: t("page.home.imagesDescriptions.10"),
    },
  ];

  function buttonClickHandler(url: string) {
    window.open(url, "_blank", "noreferrer");
  }

  return (
    <div className={styles.content}>
      <div id={styles.titleWrapper}>
        <h2 id={styles.title}>{t("page.home.title")}</h2>
      </div>

      {aviso.length > 0 && <div className={styles.aviso}>{aviso}</div>}
      <div className={styles.innerContent}>
        <section className={styles.inicio}>{t("page.home.greetings")}</section>

        <Line />

        <section className={styles.split}>
          <div className={styles.atracoes}>
            <h2>{t("page.home.enjoy")}</h2>
            <ul>
              {Atracoes.map((atracao: string, index) => {
                return <li key={index}>{atracao}</li>;
              })}
            </ul>
          </div>
          <div className={styles.carousel}>
            <Slide>
              {slideImages.map((slideImage, index) => (
                <div key={index}>
                  <div
                    style={{
                      ...divStyle,
                      backgroundImage: `url(${slideImage.url})`,
                      width: "100%",
                    }}
                  >
                    <span style={spanStyle}>{slideImage.caption}</span>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </section>

        <Line />

        <section>
          <h3>{t("page.home.findUs")}</h3>
          <div className={styles.buttonWrapper}>
            <Button
              text={"WhatsApp"}
              Icon={<ImWhatsapp />}
              onClick={() =>
                buttonClickHandler(
                  "https://wa.me/555193383992?text=Olá! Vim pelo site, gostaria de informações."
                )
              }
            />
            <Button
              text={t("page.home.contacts.phone")}
              Icon={<BsPhoneFill />}
              onClick={() => buttonClickHandler("tel:51993383992")}
            />
            <Button
              text={t("page.home.contacts.location")}
              Icon={<FaMapMarkerAlt />}
              onClick={() =>
                buttonClickHandler(
                  "http://maps.apple.com/maps?q=-29.553817905753604,-49.888173302421805"
                )
              }
            />
          </div>
        </section>
      </div>
    </div>
  );
}

interface Apartamento {
  nome: string;
  "1pessoa": string;
  "2pessoas": string;
  "3pessoas": string;
  "4pessoas": string;
  "5pessoas": string;
}

function Acomodacoes({ aviso }: PageProps) {
  const { t } = useTranslation();

  const apartamentosData: Apartamento[] = [
    {
      nome: t("page.booking.table.line1"),
      "1pessoa": "190,00",
      "2pessoas": "290,00",
      "3pessoas": " - ",
      "4pessoas": " - ",
      "5pessoas": " - ",
    },
    {
      nome: t("page.booking.table.line2"),
      "1pessoa": "290,00",
      "2pessoas": "370,00",
      "3pessoas": " - ",
      "4pessoas": " - ",
      "5pessoas": " - ",
    },
    {
      nome: t("page.booking.table.line3"),
      "1pessoa": "270,00",
      "2pessoas": "350,00",
      "3pessoas": "450,00",
      "4pessoas": " - ",
      "5pessoas": " - ",
    },
    {
      nome: t("page.booking.table.line4"),
      "1pessoa": "280,00",
      "2pessoas": "340,00",
      "3pessoas": "450,00",
      "4pessoas": " - ",
      "5pessoas": " - ",
    },
    {
      nome: t("page.booking.table.line5"),
      "1pessoa": " - ",
      "2pessoas": "390,00",
      "3pessoas": "510,00",
      "4pessoas": "580,00",
      "5pessoas": " - ",
    },
    {
      nome: t("page.booking.table.line6"),
      "1pessoa": " - ",
      "2pessoas": " - ",
      "3pessoas": " - ",
      "4pessoas": "590,00",
      "5pessoas": "660,00",
    },
    {
      nome: t("page.booking.table.line7"),
      "1pessoa": " - ",
      "2pessoas": "390,00",
      "3pessoas": "510,00",
      "4pessoas": "580,00",
      "5pessoas": "640,00",
    },
  ];

  const apartamentoSemServico: Apartamento[] = [
    {
      nome: t("page.booking.table2.line1"),
      "1pessoa": " - ",
      "2pessoas": " - ",
      "3pessoas": " - ",
      "4pessoas": "440,00",
      "5pessoas": "480,00",
    },
    {
      nome: t("page.booking.table2.line2"),
      "1pessoa": " - ",
      "2pessoas": "300,00",
      "3pessoas": "370,00",
      "4pessoas": "430,00",
      "5pessoas": "450,00",
    },
  ];

  function apClickHandler(url: string) {
    window.open(url, "_blank", "noreferrer");
  }

  return (
    <div className={styles.content}>
      <div id={styles.titleWrapper}>
        <h2 id={styles.title}>{t("page.booking.title")}</h2>
      </div>

      {aviso.length > 0 && <div className={styles.aviso}>{aviso}</div>}

      <div className={styles.innerContent}>
<<<<<<< HEAD
=======
        <EasyBooking
          apartamentosData={apartamentosData}
          apartamentoSemServico={apartamentoSemServico}
        />

>>>>>>> parent of 00e1fc7 (Adição tabela baixa/alta temporada com seletor e aviso)
        <p style={{ marginBottom: "3rem" }}>
          {t("page.booking.bookDisclaimer.part1")}
          <span className={styles.destaque}>20/12/2023</span>
          {t("page.booking.bookDisclaimer.part2")}
          <span className={styles.destaque}>28/02/2024</span>
        </p>

        <p style={{ textAlign: "center", margin: "0 auto" }}>
          {t("page.booking.info")}
        </p>
        <h3>{t("page.booking.pricesDisclaimer")}</h3>
        <div style={{ textAlign: "center", margin: "0 auto" }}>
          <h3>{t("page.booking.reservations.part1")}</h3>
          <p>{t("page.booking.reservations.part2")}</p>
          <p>{t("page.booking.reservations.part3")}</p>
        </div>

        <table cellSpacing={0}>
          <thead>
            <tr>
              <th>{t("page.booking.headers.ap")}</th>
              <th>{t("page.booking.headers.one")}</th>
              <th>{t("page.booking.headers.two")}</th>
              <th>{t("page.booking.headers.three")}</th>
              <th>{t("page.booking.headers.four")}</th>
              <th>{t("page.booking.headers.five")}</th>
            </tr>
          </thead>
          <tbody>
            {apartamentosData.map((ap, index) => {
              return (
                <tr
                  key={`ap_${index}`}
                  className={
                    index % 2 === 0 ? `${styles.even}` : `${styles.odd}`
                  }
                >
                  <td
                    className={styles.apNome}
                    onClick={() =>
                      apClickHandler(
                        `https://wa.me/555193383992?text=${t(
                          "page.booking.customMessage"
                        )} ${ap.nome}`
                      )
                    }
                  >
                    {ap.nome}
                  </td>
                  <td>{ap["1pessoa"]}</td>
                  <td>{ap["2pessoas"]}</td>
                  <td>{ap["3pessoas"]}</td>
                  <td>{ap["4pessoas"]}</td>
                  <td>{ap["5pessoas"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <span className={styles.observ}>{t("page.booking.table.obs")}</span>

        <Line />

        <h3>
          {t("page.booking.table2.disclaimer.part1")}
          <span style={{ color: "red" }}>
            {t("page.booking.table2.disclaimer.part2")}
          </span>
        </h3>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <th>{t("page.booking.headers.ap")}</th>
              <th>{t("page.booking.headers.one")}</th>
              <th>{t("page.booking.headers.two")}</th>
              <th>{t("page.booking.headers.three")}</th>
              <th>{t("page.booking.headers.four")}</th>
              <th>{t("page.booking.headers.five")}</th>
            </tr>
          </thead>
          <tbody>
            {apartamentoSemServico.map((ap, index) => {
              return (
                <tr
                  key={`apSS_${index}`}
                  className={
                    index % 2 === 0 ? `${styles.even}` : `${styles.odd}`
                  }
                >
                  <td
                    className={styles.apNome}
                    onClick={() =>
                      apClickHandler(
                        `https://wa.me/555193383992?text=Olá! Vim pelo site, gostaria de informações sobre o ${ap.nome} - sem serviços`
                      )
                    }
                  >
                    {ap.nome}
                  </td>
                  <td>{ap["1pessoa"]}</td>
                  <td>{ap["2pessoas"]}</td>
                  <td>{ap["3pessoas"]}</td>
                  <td>{ap["4pessoas"]}</td>
                  <td>{ap["5pessoas"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <span className={styles.observ}>{t("page.booking.table2.obs")}</span>

        <Line />

        <table cellSpacing={0}>
          <thead>
            <tr>
              <th colSpan={2}>{t("page.booking.headers.children")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t("page.booking.table3.line1.part1")}</td>
              <td>{t("page.booking.table3.line1.part2")}</td>
            </tr>
            <tr className={styles.odd}>
              <td>{t("page.booking.table3.line2.part1")}</td>
              <td rowSpan={3}>
                {t("page.booking.table3.line2.part2")}
                <br></br>
                {t("page.booking.table3.line2.part3")} <br></br>
                {t("page.booking.table3.line2.part4")}
              </td>
            </tr>
          </tbody>
        </table>

        <Line />

        <div className={styles.disclaimer}>{t("page.booking.garage")}</div>
      </div>
    </div>
  );
}

function ComoChegar({ aviso }: PageProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.content}>
      <div id={styles.titleWrapper}>
        <h2 id={styles.title}>{t("page.location.title")}</h2>
      </div>

      {aviso.length > 0 && <div className={styles.aviso}>{aviso}</div>}

      <div className={styles.innerContent}>
        <div className={styles.split}>
          <div className={`mapouter ${styles.map}`}>
            <div className="gmap_canvas">
              <iframe
                style={{
                  width: "100%",
                  height: "450px",
                  border: "none",
                }}
                className="gmap_iframe"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Hotel Sereia Arroio do Sal&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>

          <div className={styles.directions}>
            <p>{t("page.location.first")}</p>
            <p>{t("page.location.seccond")}</p>
            <p>{t("page.location.third")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface images {
  url: string;
  title: string;
}

function MaisFotos({ aviso }: PageProps) {
  const { t } = useTranslation();

  const imagesList: images[] = [
    {
      url: "./mais_fotos/casal_vista_mar.jpg",
      title: t("page.pictures.pictureList.1"),
    },
    {
      url: "./mais_fotos/casal_vista_mar_ar_tv.jpg",
      title: t("page.pictures.pictureList.1"),
    },
    {
      url: "./mais_fotos/casal_vista_mar_vista.jpg",
      title: t("page.pictures.pictureList.1"),
    },
    {
      url: "./mais_fotos/conjugado_vista_mar.jpg",
      title: t("page.pictures.pictureList.2"),
    },
    {
      url: "./mais_fotos/conjugado_vista_mar_2.jpg",
      title: t("page.pictures.pictureList.2"),
    },
    {
      url: "./mais_fotos/conjugado_vista_mar_vista.jpg",
      title: t("page.pictures.pictureList.2"),
    },
    {
      url: "./mais_fotos/conjugado_vista_mar_terreo.jpg",
      title: t("page.pictures.pictureList.3"),
    },
    {
      url: "./mais_fotos/conjugado_vista_mar_terreo_2.jpg",
      title: t("page.pictures.pictureList.3"),
    },
    {
      url: "./mais_fotos/conjugado_vista_mar_terreo_vista.jpg",
      title: t("page.pictures.pictureList.3"),
    },
    {
      url: "./mais_fotos/conjugado_vista_mar_tv_cozinha.jpg",
      title: t("page.pictures.pictureList.3"),
    },
    {
      url: "./mais_fotos/patio_piscina.jpg",
      title: t("page.pictures.pictureList.4"),
    },
    {
      url: "./mais_fotos/patio_piscina_2.jpg",
      title: t("page.pictures.pictureList.4"),
    },
    {
      url: "./mais_fotos/patio_piscina_3.jpg",
      title: t("page.pictures.pictureList.5"),
    },
    {
      url: "./mais_fotos/sala_estar.jpg",
      title: t("page.pictures.pictureList.6"),
    },
    {
      url: "./mais_fotos/sala_estar_redario.jpg",
      title: t("page.pictures.pictureList.7"),
    },
  ];

  return (
    <div className={styles.content}>
      <div id={styles.titleWrapper}>
        <h2 id={styles.title}>{t("page.pictures.title")}</h2>
      </div>

      {aviso.length > 0 && <div className={styles.aviso}>{aviso}</div>}

      <div className={styles.innerContent}>
        <p
          style={{
            textAlign: "center",
            margin: "0 auto",
            marginBottom: "2rem",
          }}
        >
          {t("page.pictures.tip")}
        </p>

        <div className={styles.imagesGrouping}>
          <PhotoProvider>
            {imagesList.map((image, index) => {
              return (
                <div
                  className={styles.imageContainer}
                  style={{ width: index === 14 ? "100%" : "" }}
                >
                  <PhotoView src={image.url} key={`foto_${index}`}>
                    <img src={image.url} alt="" key={`foto_${index}`} />
                  </PhotoView>
                  <h3 className={styles.imageInfo}>{image.title}</h3>
                </div>
              );
            })}
          </PhotoProvider>
        </div>
      </div>
    </div>
  );
}

function Error404() {
  return (
    <div className={styles.content}>
      <div id={styles.titleWrapper}>
        <h2 id={styles.title}>OPS!</h2>
      </div>
      <div className={styles.innerContent} style={{ textAlign: "center" }}>
        Parece que se perdeu, alguma coisa deu errado!
        <p>
          <Link
            to="/"
            style={{
              color: "var(--destaque)",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            Clique aqui para voltar
          </Link>
        </p>
      </div>
    </div>
  );
}

export { HomePage, Acomodacoes, ComoChegar, MaisFotos, Error404 };
