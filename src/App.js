import React from "react";
import { Container, Typography } from "@material-ui/core"
import { validateCPF, validatePassword } from "./models/Register"
import RegisterValidation from './contexts/RegisterValidations'
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";

function App() {

  function whenSendingForm(dados) {
    console.log(dados);
  }

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center" >
        Formulário de cadastro
      </Typography>
      <RegisterValidation.Provider value={{ cpf: validateCPF, senha: validatePassword }}>
        <RegistrationForm
          whenSendingForm={whenSendingForm}
          validations={{ cpf: validateCPF, senha: validatePassword }}
        />
      </RegisterValidation.Provider>
    </Container>
  )
}

export default App