const yup = require('yup');

const pacienteSchema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  cpf: yup.string().required('CPF é obrigatório'),
  dataNascimento: yup.date().required('Data de nascimento é obrigatória'),
  genero: yup.string().required('Gênero é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  telefone: yup.string(),
  endereco: yup.object().shape({
    rua: yup.string(),
    numero: yup.number(),
    cidade: yup.string(),
    estado: yup.string(),
    cep: yup.string(),
  }),
  historicoMedico: yup.string(),
});

function validarPaciente(req, res, next) {
  pacienteSchema
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
  validarPaciente,
};
