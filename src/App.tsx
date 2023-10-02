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

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Logo />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Acomodacoes" element={<Acomodacoes />} />
          <Route path="/Como_chegar" element={<ComoChegar />} />
          <Route path="/Mais_fotos" element={<MaisFotos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
