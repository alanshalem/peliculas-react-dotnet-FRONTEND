import * as Yup from "yup";
const ConfigurarValidaciones = () => {
  // capitalize
  Yup.addMethod(Yup.string, "capitalize", function () {
    return this.test(
      "capitalize",
      "La primera letra debe ser mayúscula",
      function (valor) {
        if (valor && valor.length > 0) {
          const primeraLetra = valor.substring(0, 1);
          return primeraLetra === primeraLetra.toUpperCase();
        }
        return true;
      }
    );
  });
  //
};

export default ConfigurarValidaciones;
