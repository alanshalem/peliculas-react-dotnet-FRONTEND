import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CrearGenero = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate("/generos")}>Guardar</Button>
    </div>
  );
};

export default CrearGenero;
