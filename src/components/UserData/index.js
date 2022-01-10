import { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import RegisterValidation from "../../contexts/RegisterValidations";
import useErros from "../../hooks/useErros";

function UserData({ whenSendingForm }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validations = useContext(RegisterValidation)
  const [erros, validateFields, iCanSend] = useErros(validations)

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (iCanSend()) {
          whenSendingForm({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        name="email"
        label="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validateFields}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        name="senha"
        label="senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default UserData;