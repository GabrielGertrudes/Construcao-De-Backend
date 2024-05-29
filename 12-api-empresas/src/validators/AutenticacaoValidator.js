const yup = require('yup')
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET

const jwt = require('jsonwebtoken')


const registroSchema = yup.object().shape(
    {
        nome: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório"),
        email: yup
            .string("Campo precisa ser um texto")
            .email("E-mail inválido")
            .required("Campo obrigatório"),
        senha: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório"),
    }
)

function validarUsuario(req, res, next) {
    registroSchema
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

const loginSchema = yup.object().shape(
    {
        email: yup
            .string("Campo precisa ser um texto")
            .email("E-mail inválido")
            .required("Campo obrigatório"),
        senha: yup
            .string("Campo precisa ser um texto")
            .required("Campo obrigatório"),
    }
)

function validarLogin(req, res, next) {
    loginSchema
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


async function checkToken(req, res, next) {
    try {
        const header = req.get('Authorization')
        const authorization = header.split(' ')

        const token = authorization[1]

        jwt.verify(token, JWT_SECRET)
        next()
    } catch (err) {
        return res.status(401).json({ mensagem: "Token inválido" })
    }
}


module.exports = {
    validarUsuario,
    validarLogin,
    checkToken
}