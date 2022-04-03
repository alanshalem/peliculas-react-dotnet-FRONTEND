import { Link } from "react-router-dom";

const IndiceActores = () => {
  return (
    <>
      <h3>IndiceGeneros</h3>
      <Link to="/actores/crear">Crear Actor</Link>
      <Link to="/actores/editar">Editar Actor</Link>
    </>
  );
};

export default IndiceActores;
