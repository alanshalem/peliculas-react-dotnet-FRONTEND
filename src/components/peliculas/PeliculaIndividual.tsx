import { CardContent, CardMedia, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { peliculaModel } from "./pelicula.model";

const PeliculaIndividual = (props: PeliculaIndividualProps) => {
  const construirLink = (id: number) => `/pelicula/${id}`;
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <a href={construirLink(props.pelicula.id)}>
        <CardMedia
          component="img"
          height="140"
          image={`${props.pelicula.poster}`}
          alt={props.pelicula.titulo}
        />
      </a>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {props.pelicula.titulo}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PeliculaIndividual;

interface PeliculaIndividualProps {
  pelicula: peliculaModel;
}
