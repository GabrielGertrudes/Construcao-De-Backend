const yup = require('yup');

const tratamentoSchema = yup.object().shape({
  paciente: yup.string().required('Paciente é obrigatório'),
  descricao: yup.string(),
  dataInicio: yup.date().required('Data de início é obrigatória'),
  dataFim: yup.date(),
  status: yup.string().oneOf(['Em andamento', 'Concluído'], 'Status inválido'),
});

function validarTratamento(req, res, next) {
  tratamentoSchema
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
  validarTratamento,
};
