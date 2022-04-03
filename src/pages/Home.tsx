import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ListadoPeliculas from "../components/peliculas/ListadoPeliculas";
import {
  peliculaModel,
  peliculasLandingPageModel,
} from "../components/peliculas/pelicula.model";

const Home = () => {
  const [cargando, setCargando] = useState(true);
  const [peliculas, setPeliculas] = useState<peliculasLandingPageModel>({});

  const enCartelera: peliculaModel[] = [];

  const proximosEstrenos: peliculaModel[] = [];

  useEffect(() => {
    const timerID = setTimeout(() => {
      setCargando(false);
      setPeliculas({
        enCartelera: [
          {
            id: 1,
            titulo: "Avengers: Infinity War",
            poster:
              "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
          },
          {
            id: 2,
            titulo: "Avengers: Endgame",
            poster:
              "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
          },
          {
            id: 3,
            titulo: "Avengers: Endgame",
            poster:
              "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
          },
          {
            id: 4,
            titulo: "Avengers: Endgame",
            poster:
              "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
          },
          {
            id: 5,
            titulo: "Avengers: Endgame",
            poster:
              "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
          },
          {
            id: 6,
            titulo: "Avengers: Endgame",
            poster:
              "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
          },
        ],

        proximosEstrenos: [
          {
            id: 1,
            titulo: "Avengers: Infinity War",
            poster:
              "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
          },
          {
            id: 2,
            titulo: "Avengers: Endgame",
            poster:
              "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
          },
        ],
      });
    }, 2000);
  }, []);

  return (
    <div>
      {" "}
      <Typography align={"center"} variant={"h3"}>
        Peliculas en cartelera
      </Typography>
      <ListadoPeliculas peliculas={peliculas.enCartelera} />
      <Typography align={"center"} variant={"h3"}>
        Proximos estrenos
      </Typography>
      <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
    </div>
  );
};

export default Home;
