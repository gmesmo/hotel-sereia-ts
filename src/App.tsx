import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {
  HomePage,
  Acomodacoes,
  ComoChegar,
  MaisFotos,
  Error404,
} from "./components/pages/Pages";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/logo";

import "./App.css";
import Social from "./components/social/Social";

const aviso: string = "Retornamos dia 10/10!";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Logo />
        <Social />
        <Routes>
          <Route path="/" element={<HomePage aviso={aviso} />} />
          <Route path="/Acomodacoes" element={<Acomodacoes aviso={aviso} />} />
          <Route path="/Como_chegar" element={<ComoChegar aviso={aviso} />} />
          <Route path="/Mais_fotos" element={<MaisFotos aviso={aviso} />} />
          <Route path="*" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
