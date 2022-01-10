import { useState } from 'react';

function useErros (validations) {
  const initialState = createIntialState(validations)
  const [erros, setErros] = useState(initialState);

  function validateFields(event) {
    const { name, value } = event.target;
    const newState = { ...erros };
    newState[name] = validations[name](value);
    setErros(newState);
  }

  function iCanSend() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }
  return [erros, validateFields, iCanSend]
}

function createIntialState(validations){
  const initialState = {}
  for(let campo in validations) {
    initialState[campo] = { valido: true, texto: "" }
  }
  return initialState
}

export default useErros
