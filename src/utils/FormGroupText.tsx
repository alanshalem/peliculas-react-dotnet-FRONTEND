import { Alert, TextField } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import FormGroupCSS from "./FormGroupCSS.module.css";
import { useField } from "formik";

const FormGroupText = (props: FormGroupTextProps) => {
  return (
    <div className={FormGroupCSS.form__group}>
      <Field
        className={FormGroupCSS.form__field}
        id={props.name}
        name={props.name}
        value={props.value}
        placeholder={props.name}
        type="text"
      />
      <label className={FormGroupCSS.form__label} htmlFor={props.name}>
        {props.label}
      </label>

      <ErrorMessage name={props.name}>
        {(msg) => <Alert severity="error">{msg}</Alert>}
      </ErrorMessage>
    </div>
  );
};

export default FormGroupText;

interface FormGroupTextProps {
  id: string;
  name: string;
  label?: string;
  value?: string;
  error?: string;
}
