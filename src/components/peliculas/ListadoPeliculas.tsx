import { Box, CircularProgress, Grid } from "@mui/material";
import ListadoGenerico from "../../utils/ListadoGenerico";
import { peliculaModel } from "./pelicula.model";
import PeliculaIndividual from "./PeliculaIndividual";

const ListadoPeliculas = (props: ListadoPeliculasProps) => {
  return (
    <ListadoGenerico listado={props.peliculas}>
      <Grid container spacing={2} margin={2}>
        {props.peliculas?.map((pelicula: peliculaModel) => {
          return <PeliculaIndividual pelicula={pelicula} key={pelicula.id} />;
        })}
      </Grid>
    </ListadoGenerico>
  );
};

export default ListadoPeliculas;

interface ListadoPeliculasProps {
  peliculas?: peliculaModel[];
}
