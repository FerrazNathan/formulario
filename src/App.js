import React from "react";
import {Container, Typography } from "@material-ui/core"
import {validarCPF, validarSenha} from "./models/cadastro"
import ValidacoesCadastro from './contexts/ValidacoesCadastro'
import "./App.css";
import 'fontsource-roboto';
import FormularioCadastro from "./components/Formulario";

function App() {

function aoEnviarForm(dados){
console.log(dados);
}

return (
<Container component="article" maxWidth="sm">
<Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
<ValidacoesCadastro.Provider value={{ cpf: validateCPF, senha: validatePassword }}>
<FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{cpf:validarCPF, senha:validarSenha, nome:validarSenha}} />
</ValidacoesCadastro.Provider>
</Container>
)
}

export default App