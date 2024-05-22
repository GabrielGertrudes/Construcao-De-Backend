const yup = require('yup')

const schema = yup.object().shape(
    {
        nome: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório"),
        cpf: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório"),
        email: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório"),
        telefone: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório"),
        dataContrata: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório"),
        nome: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório"),
    }
)

function validarDepartamento(req, res, next) {
    schema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => res.status(400).json(
            {
                mensagem: "Erro na validação dos campos!",
                erro: err.errors
            }
        ))
}

module.exports = {
    validarDepartamento
}