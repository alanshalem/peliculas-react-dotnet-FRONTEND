import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { ReactElement } from "react";

const ListadoGenerico = (props: ListadoGenericoProps) => {
  if (!props.listado) {
    if (props.cargandoUI) {
      return props.cargandoUI;
    }
    return (
      <Box component="div" sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  } else if (props.listado.length === 0) {
    if (props.listadoVacioUI) {
      return props.listadoVacioUI;
    }
    return <h3>No hay elementos para mostrar</h3>;
  } else {
    return props.children;
  }
};

export default ListadoGenerico;

interface ListadoGenericoProps {
  listado: any;
  children: ReactElement;
  cargandoUI?: ReactElement;
  listadoVacioUI?: ReactElement;
}
