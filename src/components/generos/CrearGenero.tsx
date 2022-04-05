import { Alert, Button, Card, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import FormGroupText from "../../utils/FormGroupText";
import FormularioGeneros from "./FormularioGeneros";

const CrearGenero = () => {
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

export default CrearGenero;
