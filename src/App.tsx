import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import Layout from "./components/layouts/Layout";
// PELICULAS
import CrearPeliculas from "./components/peliculas/CrearPelicula";
import EditarPeliculas from "./components/peliculas/EditarPelicula";
import FiltroPeliculas from "./components/peliculas/FiltroPeliculas";
import Home from "./pages/Home";

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
            {/* ----------GENEROS---------- */}
            <Route path="/generos" element={<IndiceGeneros />} />
            <Route path="/generos/crear" element={<CrearGenero />} />
            <Route path="/generos/editar:id(\\d+)" element={<EditarGenero />} />
            {/* ----------ACTORES---------- */}
            <Route path="/actores" element={<IndiceActores />} />
            <Route path="/actores/crear" element={<CrearActor />} />
            <Route path="/actores/editar:id(\\d+)" element={<EditarActor />} />
            {/* ----------CINES---------- */}
            <Route path="/cines" element={<IndiceCines />} />
            <Route path="/cines/crear" element={<CrearCine />} />
            <Route path="/cines/editar:id(\\d+)" element={<EditarCine />} />
            {/* ----------PELICULAS---------- */}
            <Route path="/peliculas" />
            <Route path="/peliculas/crear" element={<CrearPeliculas />} />
            <Route
              path="/peliculas/editar:id(\\d+)"
              element={<EditarPeliculas />}
            />
            <Route path="/peliculas/filtrar" element={<FiltroPeliculas />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
