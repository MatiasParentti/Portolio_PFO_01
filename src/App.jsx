import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Proyectos from "./components/Proyectos";
import ProyectoDetalle from "./components/ProyectoDetalle";
import Home from "./components/Home";
import "./App.css";
import Layout from "./components/Layout";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectos/:id" element={<ProyectoDetalle />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
