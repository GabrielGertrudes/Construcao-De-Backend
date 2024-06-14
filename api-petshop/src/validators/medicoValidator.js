const yup = require('yup');

const medicoSchema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  especialidade: yup.string(),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  telefone: yup.string(),
  departamento: yup.string(),
});

function validarMedico(req, res, next) {
  medicoSchema
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
  validarMedico,
};
