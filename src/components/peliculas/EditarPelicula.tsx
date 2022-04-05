import { useParams } from "react-router-dom";

const EditarPeliculas = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <h3>Editar Pelicula</h3>
      <p>{id}</p>
    </>
  );
};

export default EditarPeliculas;
