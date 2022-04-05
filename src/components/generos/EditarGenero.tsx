import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import FormularioGeneros from "./FormularioGeneros";

const EditarGenero = () => {
  const { id }: any = useParams();
  console.log(id);
  return (
    <>
      <Typography align="center" variant="h4" mt={5}>
        Crear Genero
      </Typography>
      <FormularioGeneros
        modelo={{ nombre: "" }}
        onSubmit={async (valores) => {
          await new Promise((r) => setTimeout(r, 1000));
          console.log(valores);
        }}
      />
    </>
  );
};

export default EditarGenero;
