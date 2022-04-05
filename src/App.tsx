import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
// ACTOR
import CrearActor from "./components/actores/CrearActor";
import EditarActor from "./components/actores/EditarActor";
import IndiceActores from "./components/actores/IndiceActores";
// CINE
import CrearCine from "./components/cines/CrearCine";
import EditarCine from "./components/cines/EditarCine";
import IndiceCines from "./components/cines/IndiceCines";
// GENERO
import CrearGenero from "./components/generos/CrearGenero";
import EditarGenero from "./components/generos/EditarGenero";
import IndiceGeneros from "./components/generos/IndiceGeneros";
// PELICULAS
import CrearPeliculas from "./components/peliculas/CrearPelicula";
import EditarPeliculas from "./components/peliculas/EditarPelicula";
import FiltroPeliculas from "./components/peliculas/FiltroPeliculas";
// LAYOUT + PAGES
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
// VALIDACIONES
import ConfigurarValidaciones from "./utils/ConfigurarValidaciones";

ConfigurarValidaciones();

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Route>
          {/* ----------PELICULAS---------- */}
          <Route path="/peliculas" element={<Layout />}>
            <Route path="crear" element={<CrearPeliculas />} />
            <Route path="editar/:id" element={<EditarPeliculas />} />
            <Route path="filtrar" element={<FiltroPeliculas />} />
          </Route>
          {/* ----------GENEROS---------- */}
          <Route path="/generos" element={<Layout />}>
            <Route index element={<IndiceGeneros />} />
            <Route path="crear" element={<CrearGenero />} />
            <Route path="editar/:id" element={<EditarGenero />} />
          </Route>
          {/* ----------ACTORES---------- */}
          <Route path="/actores" element={<Layout />}>
            <Route index element={<IndiceActores />} />
            <Route path="crear" element={<CrearActor />} />
            <Route path="editar/:id" element={<EditarActor />} />
          </Route>
          {/* ----------CINES---------- */}
          <Route path="/cines" element={<Layout />}>
            <Route index element={<IndiceCines />} />
            <Route path="crear" element={<CrearCine />} />
            <Route path="editar/:id" element={<EditarCine />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
