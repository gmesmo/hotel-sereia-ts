import {
  HomePage,
  Acomodacoes,
  ComoChegar,
  MaisFotos,
} from "./components/pages/Pages";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/logo";

import "./App.css";
import Social from "./components/social/Social";

import { useTranslation } from "react-i18next";
import { useState } from "react";

function App() {
  const { t } = useTranslation();
  const aviso: string = t("disclaimer");
  const [activePage, setActivePage] = useState("home");

  // Função que atualiza o estado da página ativa ao clicar na barra de navegação
  const updateActivePage = (page: string) => {
    console.log(page);
    setActivePage(page);
  };

  return (
    <div className="App">
      <Navigation onClick={updateActivePage} activePage={activePage} />
      <Logo onClick={updateActivePage} />
      <Social />

      {activePage === "home" && <HomePage aviso={aviso} />}
      {activePage === "tarifas" && <Acomodacoes aviso={aviso} />}
      {activePage === "comoChegar" && <ComoChegar aviso={aviso} />}
      {activePage === "maisFotos" && <MaisFotos aviso={aviso} />}

      {/* <Router>
        <Routes>
          <Route path="/" element={<HomePage aviso={aviso} />} />
          <Route path="/Inicio" element={<HomePage aviso={aviso} />} />
          <Route path="/Tarifas" element={<Acomodacoes aviso={aviso} />} />
          <Route path="/Como_chegar" element={<ComoChegar aviso={aviso} />} />
          <Route path="/Mais_fotos" element={<MaisFotos aviso={aviso} />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
