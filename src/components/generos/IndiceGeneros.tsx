import { Link } from "react-router-dom";

const IndiceGeneros = () => {
  return (
    <>
      <h3>IndiceGeneros</h3>
      <Link to="/generos/crear">Crear Genero</Link>
      <Link to="/generos/editar">Editar Genero</Link>
    </>
  );
};

export default IndiceGeneros;

interface IndiceGenerosProps {}
