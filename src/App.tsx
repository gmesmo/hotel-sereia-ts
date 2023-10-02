import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Acomodacoes from "./components/pages/Acomodacoes";

import "./App.css";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/Acomodacoes" Component={Acomodacoes} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
