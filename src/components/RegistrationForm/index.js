import React, { useState, useEffect } from 'react'
import PersonalData from '../PersonalData'
import UserData from '../UserData'
import DeliveryData from '../DeliveryData'
import { Typography, Stepper, Step, StepLabel } from '@material-ui/core'

function RegistrationForm({ whenSendingForm, validations }) {
  const [currentStage, setCurrentStage] = useState(0);
  const [RegisterValidation, setDados] = useState({});

  useEffect(() => {
    if (currentStage === allforms.length - 1) {
      whenSendingForm(RegisterValidation);
    }
  })

  const allforms = [
    <UserData whenSendingForm={collectData} validations={validations} />,
    <PersonalData whenSendingForm={collectData} validations={validations} />,
    <DeliveryData whenSendingForm={collectData} validations={validations} />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
  ];

  function collectData(dados) {
    setDados({ ...RegisterValidation, ...dados });
    nextPage();
  }
  function nextPage() {
    setCurrentStage(currentStage + 1);
  }

  return (
    <>
      <Stepper activeStep={currentStage}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {formularios[currentStage]}
    </>
  )
}

export default RegistrationForm;
