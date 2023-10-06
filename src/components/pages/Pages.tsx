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

const slideImages = [
  {
    url: "./mais_fotos/patio_piscina.jpg",
    caption: "Patio Piscina",
  },
  {
    url: "./img-1.jpg",
    caption: "Por do sol",
  },
  {
    url: "./img-2.jpg",
    caption: "Café da manhã",
  },
  {
    url: "./img-3.jpg",
    caption: "Pátio Interno",
  },
  {
    url: "./img-4.jpg",
    caption: "Parque",
  },
  {
    url: "./img-5.jpg",
    caption: "Redário",
  },
  {
    url: "./img-6.jpg",
    caption: "Área de Convivência",
  },
  {
    url: "./img-7.jpg",
    caption: "Área de Convivência e Leitura",
  },
  {
    url: "./img-8.jpg",
    caption: "Piscina",
  },
  {
    url: "./img-9.jpg",
    caption: "Vista para o mar",
  },
];

interface PageProps {
  aviso: string;
}

function HomePage({ aviso }: PageProps) {
  const Atracoes: string[] = [
    "Belezas naturais",
    "Delicioso café da manhã",
    "Tempo de qualidade com aqueles que se ama",
    "Ambiente familiar",
    "Comodidade e tranquilidade em nosso belíssimo Litoral Gaúcho",
    "Salas de estar com Tv",
    "Sala de leitura com redes para descanso",
    "Espaço com churrasqueira e jogos",
    "Área verde para vôlei e futebol, espaço infantil",
    "Pátio interno com bar, piscina aquecida adulto e infantil",
    "Sauna",
  ];

  function buttonClickHandler(url: string) {
    window.open(url, "_blank", "noreferrer");
  }

  return (
    <div className={styles.content}>
      <div id={styles.titleWrapper}>
        <h2 id={styles.title}>Bem vindo!</h2>
      </div>

      {aviso.length > 0 && <div className={styles.aviso}>{aviso}</div>}
      <div className={styles.innerContent}>
        <section className={styles.inicio}>
          Se ficar no litoral gaúcho já é incrível, imagine o prazer de estar
          hospedado a beira mar, cercado de belezas naturais, diversão e muito
          conforto! O Hotel Sereia oferece uma estrutura completa de lazer para
          você aproveitar ao máximo suas férias! Arroio do Sal, uma tranquila
          cidade no litoral do Rio Grande do Sul, possui toda a estrutura para
          que você desfrute suas férias. Aqui está localizado o Hotel Sereia que
          oferece apartamentos com TV e frigobar de frente para o mar. O Hotel
          também possui salão de jogos, de leitura, sauna e piscina.
        </section>

        <Line />

        <section className={styles.split}>
          <div className={styles.atracoes}>
            <h2>Venha Aproveitar!</h2>
            <ul>
              {Atracoes.map((atracao: string) => {
                return <li>{atracao}</li>;
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
          <h3>Encontre-nos através do menu Social ou contatos abaixo</h3>
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
              text={"Celular"}
              Icon={<BsPhoneFill />}
              onClick={() => buttonClickHandler("tel:51993383992")}
            />
            <Button
              text={"Localização"}
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
  const apartamentosData: Apartamento[] = [
    {
      nome: "Vista Mar/Serra simples",
      "1pessoa": "190,00",
      "2pessoas": "290,00",
      "3pessoas": " - ",
      "4pessoas": " - ",
      "5pessoas": " - ",
    },
    {
      nome: "Vista Mar 1º Mar",
      "1pessoa": "290,00",
      "2pessoas": "370,00",
      "3pessoas": " - ",
      "4pessoas": " - ",
      "5pessoas": " - ",
    },
    {
      nome: "Vista Piscina",
      "1pessoa": "270,00",
      "2pessoas": "350,00",
      "3pessoas": "450,00",
      "4pessoas": " - ",
      "5pessoas": " - ",
    },
    {
      nome: "Lateral Mar e Vista Serra",
      "1pessoa": "280,00",
      "2pessoas": "340,00",
      "3pessoas": "450,00",
      "4pessoas": " - ",
      "5pessoas": " - ",
    },
    {
      nome: "Conjugado Vista Mar 1º Andar",
      "1pessoa": " - ",
      "2pessoas": "390,00",
      "3pessoas": "510,00",
      "4pessoas": "580,00",
      "5pessoas": " - ",
    },
    {
      nome: "Conjugado Vista Mar, 02 banheiros com mini cozinha",
      "1pessoa": " - ",
      "2pessoas": " - ",
      "3pessoas": "520,00",
      "4pessoas": "590,00",
      "5pessoas": "660,00",
    },
    {
      nome: "Conjugado Vista Serra/Pátio com mini cozinha",
      "1pessoa": " - ",
      "2pessoas": "390,00",
      "3pessoas": "490,00",
      "4pessoas": "580,00",
      "5pessoas": "640,00",
    },
  ];

  const apartamentoSemServico: Apartamento[] = [
    {
      nome: "Conjugado Vista Mar, 02 banheiros com mini cozinha",
      "1pessoa": " - ",
      "2pessoas": " - ",
      "3pessoas": "380,00",
      "4pessoas": "440,00",
      "5pessoas": "480,00",
    },
    {
      nome: "Conjugado Vista Serra/Pátio com mini cozinha",
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
        <h2 id={styles.title}>Acomodações</h2>
      </div>

      {aviso.length > 0 && <div className={styles.aviso}>{aviso}</div>}

      <div className={styles.innerContent}>
        <p style={{ textAlign: "center", margin: "0 auto" }}>
          Para se informar sobre um apartamento clique no nome dele e nos mande
          um Whats!
        </p>
        <h3>
          Preços em reais (R$) por apartamento/por noite com café da manhã
        </h3>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <th>Apartamentos</th>
              <th>1 Pessoa</th>
              <th>2 Pessoa</th>
              <th>3 Pessoa</th>
              <th>4 Pessoa</th>
              <th>5 Pessoa</th>
            </tr>
          </thead>
          <tbody>
            {apartamentosData.map((ap, index) => {
              return (
                <tr
                  className={
                    index % 2 === 0 ? `${styles.even}` : `${styles.odd}`
                  }
                >
                  <td
                    className={styles.apNome}
                    onClick={() =>
                      apClickHandler(
                        `https://wa.me/555193383992?text=Olá! Vim pelo site, gostaria de informações sobre o ${ap.nome}`
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
        <span className={styles.observ}>
          * Apto Simples com ventilador de teto. Demais aptos com
          ar-condicionado, sendo que nos conjugados o ar-condicionado (12.000
          Btus) é em apenas um dos quartos e no outro quarto tem ventilador de
          teto.
        </span>

        <Line />

        <h3>
          Preços em reais (R$) no apartamento com mini cozinha/por noite{" "}
          <span style={{ color: "red" }}>SEM SERVIÇOS**</span>
        </h3>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <th>Apartamentos</th>
              <th>1 Pessoa</th>
              <th>2 Pessoa</th>
              <th>3 Pessoa</th>
              <th>4 Pessoa</th>
              <th>5 Pessoa</th>
            </tr>
          </thead>
          <tbody>
            {apartamentoSemServico.map((ap, index) => {
              return (
                <tr
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
        <span className={styles.observ}>
          * Não inclui café da manhã, roupas de cama e banho e serviço de
          limpeza diária ** Taxa de limpeza ao final da estadia R$ 180,00
        </span>

        <Line />

        <table cellSpacing={0}>
          <thead>
            <th colSpan={2}>Tarifa para crianças</th>
          </thead>
          <tbody>
            <tr>
              <td>Até 03 anos</td>
              <td>Cortesia - Berço bebê mediante solicitação</td>
            </tr>
            <tr className={styles.odd}>
              <td>04 à 10 anos</td>
              <td rowSpan={3}>
                01 Criança desconto de 10% aplicado ao número total de pessoas
                <br></br>02 Crianças desconto de 15% aplicado ao número total de
                pessoas <br></br>03 Crianças desconto de 20% aplicado ao número
                total de pessoas
              </td>
            </tr>
          </tbody>
        </table>

        <Line />

        <div className={styles.disclaimer}>
          Taxa de Garagem: R$ 30,00 a diária
        </div>
      </div>
    </div>
  );
}

function ComoChegar({ aviso }: PageProps) {
  return (
    <div className={styles.content}>
      <div id={styles.titleWrapper}>
        <h2 id={styles.title}>Como chegar</h2>
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
            <p>Para chegar no Hotel Sereia é extremamente simples!</p>
            <p>
              Ao entrar em Arroio do Sal pela entrada principal (Av. Assis
              Brasil) basta segui-la até o fim, na Av. Beira Mar, faça a curva à
              direita, após isso ficamos na segunda quadra à sua direita.
            </p>

            <p>
              Enquanto se encaminhas até nós, deves passar por diversos
              restaurantes, vale uma anotação para visitá-los depois, e o mais
              importante, a nossa belíssima praia fica logo à nossa frente!
            </p>
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
  const imagesList: images[] = [
    {
      url: "./mais_fotos/casal_vista_mar.jpg",
      title: "Apartamento casal Vista Mar",
    },
    {
      url: "./mais_fotos/casal_vista_mar_ar_tv.jpg",
      title: "Apartamento casal Vista Mar",
    },
    {
      url: "./mais_fotos/casal_vista_mar_vista.jpg",
      title: "Apartamento casal Vista Mar",
    },
    {
      url: "./mais_fotos/conjugado_vista_mar.jpg",
      title: "Conjugado Vista Mar",
    },
    {
      url: "./mais_fotos/conjugado_vista_mar_2.jpg",
      title: "Conjugado Vista Mar",
    },
    {
      url: "./mais_fotos/conjugado_vista_mar_vista.jpg",
      title: "Conjugado Vista Mar",
    },
    {
      url: "./mais_fotos/conjugado_vista_mar_terreo.jpg",
      title: "Conjugado Térreo",
    },
    {
      url: "./mais_fotos/conjugado_vista_mar_terreo_2.jpg",
      title: "Conjugado Térreo",
    },
    {
      url: "./mais_fotos/conjugado_vista_mar_terreo_vista.jpg",
      title: "Conjugado Térreo",
    },
    {
      url: "./mais_fotos/conjugado_vista_mar_tv_cozinha.jpg",
      title: "Conjugado Térreo",
    },
    {
      url: "./mais_fotos/patio_piscina.jpg",
      title: "Pátio Interno",
    },
    {
      url: "./mais_fotos/patio_piscina_2.jpg",
      title: "Pátio Interno",
    },
    {
      url: "./mais_fotos/patio_piscina_3.jpg",
      title: "Pátio Interno - Piscina",
    },
    {
      url: "./mais_fotos/sala_estar.jpg",
      title: "Sala de Estar",
    },
    {
      url: "./mais_fotos/sala_estar_redario.jpg",
      title: "Redário",
    },
  ];

  return (
    <div className={styles.content}>
      <div id={styles.titleWrapper}>
        <h2 id={styles.title}>Mais fotos</h2>
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
          Clique sob a imagem para expandir
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

export { HomePage, Acomodacoes, ComoChegar, MaisFotos };
