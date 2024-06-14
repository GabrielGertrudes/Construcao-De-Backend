const yup = require('yup');

const prescricaoSchema = yup.object().shape({
  tratamento: yup.string().required('Tratamento é obrigatório'),
  paciente: yup.string().required('Paciente é obrigatório'),
  medico: yup.string().required('Médico é obrigatório'),
  medicamento: yup.string(),
  dosagem: yup.string(),
  frequencia: yup.string(),
  duracao: yup.string(),
});

function validarPrescricao(req, res, next) {
  prescricaoSchema
    .validate(req.body, { abortEarly: false })
    .then(() => next())
    .catch((err) =>
      res.status(400).json({
        mensagem: 'Erro na validação dos campos!',
        erro: err.errors,
      })
    );
}

module.exports = {
  validarPrescricao,
};
