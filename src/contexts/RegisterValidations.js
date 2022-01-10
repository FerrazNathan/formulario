import React from 'react'

const RegisterValidation = React.createContext({
  cpf: notValidation,
  senha: notValidation,
  nome: notValidation,
})

function notValidation(dados) {
  console.log(dados, 'dados')
  return(
    {valido: true, texto: ""}
  )
}

export default RegisterValidation
