import { Link } from "react-router-dom";

const IndiceCines = () => {
  return (
    <>
      <h3>IndiceCines</h3>
      <Link to="/cines/crear">Crear Cine</Link>
      <Link to="/cines/editar">Editar Cine</Link>
    </>
  );
};

export default IndiceCines;
