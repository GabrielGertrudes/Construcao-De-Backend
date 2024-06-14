const yup = require('yup');

const consultaSchema = yup.object().shape({
  paciente: yup.string().required('Paciente é obrigatório'),
  medico: yup.string().required('Médico é obrigatório'),
  data: yup.date().required('Data é obrigatória'),
  hora: yup.string(),
  descricao: yup.string(),
});

function validarConsulta(req, res, next) {
  consultaSchema
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
  validarConsulta,
};
