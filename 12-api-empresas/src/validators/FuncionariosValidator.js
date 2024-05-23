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
            .email("E-mail inválido")
            .required("Campo obrigatório"),
        telefone: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório"),
        dataContratacao: yup
            .date("Data inválida")
            .required("Campo obrigatório"),
        dataNascimento: yup
            .date("Data inválida")
            .required("Campo obrigatório"),
        genero: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório"),
        cargo: yup
            .string("Campo precisa ser um texto"),
        departamento: yup
            .string("Campo precisa ser um texto"),
    }
)

function validarFuncionario(req, res, next) {
    schema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {

            const erros = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                }
                return erro
            })

            res.status(400).json(
                {
                    mensagem: "Falha na validação dos campos",
                    erros
                }
            )

        })
}

module.exports = {
    validarFuncionario
}