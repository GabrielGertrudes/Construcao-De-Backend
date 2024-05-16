const yup = require('yup')

const schema = yup.object().shape(
    {
        nome: yup.string().required(),
        descricao: yup.string(),
        salario: yup.number().min(1412).required()
    }
)

function validarCargo(req, res, next){
    req.body
    schema.validate(req.body, {abortEarly: false })
    .then(() => next())
    .catch(err => res.status(400).json(
        {
            mensagem: "Erro na validação dos campos",
            erro: err.errors
        }
    ))
}

module.exports = {
    validarCargo
}