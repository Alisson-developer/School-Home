const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    async store(req, res){
        const { name, classe } = req.body
        const id = crypto.randomBytes(4).toString('HEX')

        try {
            await connection('alunos').insert({
                id: id,
                name,
                classe
            })
            return res.json({ id, name, classe})
        } catch (error) {
            return res.status(400).json({error: 'Erro ao cadastrar aluno!'})
        }
    },
    
    async index(req, res){
        try {
            const alunoList = await connection('alunos').select('*')
            return res.json(alunoList)
        } catch (error) {
            return res.status(404).json({error: 'Erro ao listar alunos!'})
        }
    }
}