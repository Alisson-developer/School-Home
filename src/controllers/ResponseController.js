const connection = require('../database/connection')

module.exports = {
    async store(req, res){
        const { responseone, responsetwo, responsethree, responsefour, responsefive } = req.body
        const { aluno_name } = req.headers

        try {
            await connection('responses').insert({
                responseone,
                responsetwo,
                responsethree,
                responsefour,
                responsefive,
                aluno_name
            })
            return res.json({ responseone, responsetwo, responsethree, responsefour, responsefive, aluno_name })
        } catch (error) {
            return res.status(400).json({error: 'Não foi possível armazenar a resposta!'})
        }
    },

    async index(req, res){
        try {
            const name = await connection('responses').select('name')
            return res.json(name)
        } catch (error) {
            return res.json(error)
        }
    }
}