const mongoose = require ("mongoose");

const empreendedorasSchema = new mongoose.Schema(
    {
        id: { type: String },
        nomeDaEmpreendedora: { type: String, required: true },
        nomeDoEmpreendimento: { type: String, required: true },
        cpf: { type: String, required: true },
        cnpj: { type: String, required: true },
        redeSocial: { type: Array },
        site: { type: String },
        whatsapp: { type: String, required: true },
        email: { type: String, required: true },
        nincho: { type: String, required: true },
        categoria: { type: String, required: true },
        endereco: { type: Object, required: true },
        descricao: { type: String, required: true },
        youLiked: { type: Boolean },
    }
)

const empreendedoras = mongoose.model("empreendedoras", empreendedorasSchema);

module.exports = empreendedoras;