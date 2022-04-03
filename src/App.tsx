import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import IndiceGeneros from "./components/generos/IndiceGeneros";
import Layout from "./components/layouts/Layout";
import Home from "./pages/Home";
import rutas from "./route-config";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Routes>
          {rutas.map((ruta, index) => (
            <Route key={index} path={ruta.path} element={<ruta.componente />} />
          ))}
        </Routes> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/generos" element={<IndiceGeneros />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
