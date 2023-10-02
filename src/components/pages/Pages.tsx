import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Line from "./line";
import styles from "./pages.module.css";

const spanStyle: React.CSSProperties = {
  padding: "20px",
  background: "#efefef44",
  color: "#000000",
  position: "absolute",
  width: "100%",
  textAlign: "center",
  fontWeight: "bold",
  fontFamily: "var(--ff-text)",
  letterSpacing: ".05rem",
};

const divStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "last baseline",
  justifyContent: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "500px",
  padding: "1rem",
};

const slideImages = [
  {
    url: "http://hotelsereia.com.br/assets/img/mais_fotos/patio_piscina.jpg",
    caption: "Patio Piscina",
  },
  {
    url: "http://hotelsereia.com.br/assets/img/img-1.jpg",
    caption: "Slide 2",
  },
  {
    url: "http://hotelsereia.com.br/assets/img/img-2.jpg",
    caption: "Slide 3",
  },
  {
    url: "http://hotelsereia.com.br/assets/img/img-3.jpg",
    caption: "Slide 4",
  },
  {
    url: "http://hotelsereia.com.br/assets/img/img-4.jpg",
    caption: "Slide 5",
  },
  {
    url: "http://hotelsereia.com.br/assets/img/img-5.jpg",
    caption: "Slide 6",
  },
  {
    url: "http://hotelsereia.com.br/assets/img/img-6.jpg",
    caption: "Slide 7",
  },
  {
    url: "http://hotelsereia.com.br/assets/img/img-7.jpg",
    caption: "Slide 8",
  },
  {
    url: "http://hotelsereia.com.br/assets/img/img-8.jpg",
    caption: "Slide 9",
  },
  {
    url: "http://hotelsereia.com.br/assets/img/img-9.jpg",
    caption: "Slide 10",
  },
];

function HomePage() {
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

  return (
    <div className={styles.content}>
      <div id={styles.titleWrapper}>
        <h2 id={styles.title}>Bem vindo!</h2>
      </div>
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
          <div>
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
      </div>
    </div>
  );
}

function Acomodacoes() {
  return (
    <div className={styles.content}>
      <div id={styles.titleWrapper}>
        <h1 id={styles.title}>Acomodações</h1>
      </div>
    </div>
  );
}

function ComoChegar() {
  return (
    <div className={styles.content}>
      <div id={styles.titleWrapper}>
        <h1 id={styles.title}>Como chegar</h1>
      </div>
    </div>
  );
}

function MaisFotos() {
  return (
    <div className={styles.content}>
      <div id={styles.titleWrapper}>
        <h1 id={styles.title}>Mais fotos</h1>
      </div>
    </div>
  );
}

export { HomePage, Acomodacoes, ComoChegar, MaisFotos };
