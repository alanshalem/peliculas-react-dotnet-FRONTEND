import { Alert, Button, Card, Select, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { generoDTO } from "../generos/generos.model";
import FiltroPeliculasCSS from "./FiltroPeliculasCSS.module.css";

const FiltroPeliculas = (props: FiltroPeliculasProps) => {
  const valorInicial: FiltroPeliculasProps = {
    name: "",
    value: "",
    label: "",
    titulo: "",
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  };

  const generos: generoDTO[] = [
    { id: 1, nombre: "Acción" },
    { id: 2, nombre: "Animación" },
    { id: 3, nombre: "Aventura" },
    { id: 4, nombre: "Biografia" },
    { id: 5, nombre: "Ciencia Ficcion" },
    { id: 6, nombre: "Comedia" },
    { id: 7, nombre: "Crimen" },
    { id: 8, nombre: "Documental" },
    { id: 9, nombre: "Drama" },
    { id: 10, nombre: "Familia" },
    { id: 11, nombre: "Fantasia" },
    { id: 12, nombre: "Guerra" },
    { id: 13, nombre: "Historia" },
    { id: 14, nombre: "Misterio" },
    { id: 15, nombre: "Misterio" },
    { id: 16, nombre: "Musical" },
    { id: 17, nombre: "Romance" },
    { id: 18, nombre: "Suspenso" },
    { id: 19, nombre: "Terror" },
    { id: 20, nombre: "Western" },
    { id: 21, nombre: "Otros" },
  ];

  const nuevoArrayOrdenadoAlfabeticamente = generos.sort((a, b) =>
    a.nombre.localeCompare(b.nombre)
  );
  console.log(nuevoArrayOrdenadoAlfabeticamente);
  return (
    <>
      <Typography align="center" variant="h4" mt={5}>
        Filtrar Peliculas
      </Typography>
      <Formik
        initialValues={valorInicial}
        onSubmit={(valores) => console.log(valores)}
      >
        {(formikProps) => (
          <Form style={{ display: "flex", justifyContent: "center" }}>
            <Card
              variant="outlined"
              sx={{
                maxWidth: 500,
                marginTop: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ mb: 2, minWidth: 500 }}>
                <Box
                  sx={{
                    mb: 2,
                    minWidth: 500,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "50%",
                    // mx: "auto",
                    my: 2,
                  }}
                >
                  <div className={FiltroPeliculasCSS.form__group}>
                    <Field
                      className={FiltroPeliculasCSS.form__field}
                      id="name"
                      name="name"
                      value={formikProps.values.name}
                      placeholder="Título de la película"
                      type="text"
                    />
                    <label
                      className={FiltroPeliculasCSS.form__label}
                      htmlFor="name"
                    >
                      Nombre
                    </label>
                  </div>
                  <div className={FiltroPeliculasCSS.form__group}>
                    <select
                      className={FiltroPeliculasCSS.form__field}
                      id="generoId"
                      name="generoId"
                      value={formikProps.values.generoId}
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      style={{ marginLeft: "10px" }}
                    >
                      <option value="">---Seleccione un genero---</option>
                      {generos.map((genero) => (
                        <option key={genero.id} value={genero.id}>
                          {genero.nombre}
                        </option>
                      ))}
                    </select>
                    <label
                      className={FiltroPeliculasCSS.form__label}
                      htmlFor="generoId"
                    >
                      Genero
                    </label>
                  </div>
                  <div className={FiltroPeliculasCSS.form__group}>
                    <Field
                      type="checkbox"
                      id="proximosEstrenos"
                      className={FiltroPeliculasCSS.form__field}
                    ></Field>
                    <label
                      className={FiltroPeliculasCSS.form__label}
                      htmlFor="proximosEstrenos"
                    >
                      Proximos Estrenos
                    </label>
                  </div>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    mx: "auto",
                    width: "50%",
                  }}
                >
                  <Button
                    color="primary"
                    disabled={formikProps.isSubmitting}
                    variant="contained"
                    type="submit"
                  >
                    Crear
                  </Button>
                  <Button
                    color="error"
                    variant="contained"
                    component={Link}
                    to="/"
                  >
                    Cancelar
                  </Button>
                </Box>
              </Box>
            </Card>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FiltroPeliculas;

interface FiltroPeliculasProps {
  name: string;
  label: string;
  value: string;
  titulo?: string;
  generoId?: number;
  proximosEstrenos?: boolean;
  enCines?: boolean;
}
