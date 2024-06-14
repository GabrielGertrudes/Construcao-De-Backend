const yup = require('yup');

const usuarioSchema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  senha: yup.string().required('Senha é obrigatória').min(6, 'Senha deve ter pelo menos 6 caracteres'),
});

const loginSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  senha: yup.string().required('Senha é obrigatória'),
});

function validarUsuario(req, res, next) {
  usuarioSchema
    .validate(req.body, { abortEarly: false })
    .then(() => next())
    .catch((err) =>
      res.status(400).json({
        mensagem: 'Erro na validação dos campos!',
        erro: err.errors,
      })
    );
}

function validarLogin(req, res, next) {
  loginSchema
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
  validarUsuario,
  validarLogin,
};
