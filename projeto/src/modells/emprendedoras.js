const mongoose = require ("mongoose")

const EmpreendedoraSchema = new mongoose.Schema(
    {
        id: { type: String, required: true},
        nomeDaEmpreendedora: { type: String, required: true },
        nomeDoEmpreendimento: { type: String, required: true },
        cpf: { type: String, required: true },
        cnpj: { type: String, required: true },
        redeSocial: { type: array },
        site: { type: String },
        whatsapp: { type: String, required: true },
        email: { type: String, required: true },
        nincho: { type: String, required: true },
        categoria: { type: String, required: true },
        endereco: { type: object, required: true },
        descricao: { type: String, required: true },
        youLiked: { type: boolean }
    }

)

const empreendedoras = mongoose.model('empreendedoras',EmpreendedoraSchema)
module.exports = empreendedoras;