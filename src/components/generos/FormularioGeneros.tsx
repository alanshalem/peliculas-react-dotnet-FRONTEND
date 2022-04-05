import { Box, Button, Card, Typography } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import FormGroupText from "../../utils/FormGroupText";
import * as Yup from "yup";
import { generoCreacionDTO } from "./generos.model";

const FormularioGeneros = (props: FormularioGenerosProps) => {
  const nuevoGeneroSchema = Yup.object().shape({
    nombre: Yup.string().required("El nombre es requerido").capitalize(),
  });

  return (
    <Formik
      initialValues={props.modelo}
      validationSchema={nuevoGeneroSchema}
      onSubmit={props.onSubmit}
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
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "50%",
                  mx: "auto",
                  my: 2,
                }}
              >
                <FormGroupText name="nombre" label="Nombre" id="name" />
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
                  to="/generos"
                >
                  Cancelar
                </Button>
              </Box>
            </Box>
          </Card>
        </Form>
      )}
    </Formik>
  );
};

export default FormularioGeneros;

interface FormularioGenerosProps {
  modelo: generoCreacionDTO;
  onSubmit(
    valores: generoCreacionDTO,
    accion: FormikHelpers<generoCreacionDTO>
  ): void;
}
