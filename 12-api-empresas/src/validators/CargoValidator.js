const yup = require('yup')

const schema = yup.object().shape(
    {
        nome: yup
            .string("Campo nome precisa ser um texto")
            .required("Campo nome é obrigatório"),
        descricao: yup
            .string("Campo descricao precisa ser um texto"),
        salario: yup
            .number("Campo salario precisa ser numerico")
            .min(1412, "Campo salario precisa ser maior que o salario minimo")
            .required("Campo salario é obrigatório")
    }
)

function validarCargo(req, res, next) {
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
    validarCargo
}