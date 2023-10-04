import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  HomePage,
  Acomodacoes,
  ComoChegar,
  MaisFotos,
} from "./components/pages/Pages";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/logo";

import "./App.css";
// import Social from "./components/social/social";

const aviso: string = "Retornamos dia 10/10!";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Logo />
        {/* <Social /> */}
        <Routes>
          <Route path="/" element={<HomePage aviso={aviso} />} />
          <Route path="/Acomodacoes" element={<Acomodacoes aviso={aviso} />} />
          <Route path="/Como_chegar" element={<ComoChegar aviso={aviso} />} />
          <Route path="/Mais_fotos" element={<MaisFotos aviso={aviso} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
