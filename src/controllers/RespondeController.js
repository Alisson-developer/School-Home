const connection = require('../database/connection')

module.exports = {
    async store(req, res){
        const { exerc_id, resp_name } = req.headers

        let date = new Date()
        
        try {
            await connection('responde').insert({
                exerc_id,
                resp_name,
                created_at: date.getDay()
            })
            return res.json({exerc_id, resp_name})
        } catch (error) {
            return res.json({ error: 'Não foi possível criar relação entre tabelas!'})
        }
    },

    async index(req, res){
        try {
            const relational = await connection('exercises').select(
                'responde.id', 'responses.aluno_name',
                'exercises.discipline', 'exercises.classe', 'exercises.title',
                'exercises.content', 'exercises.questionone', 'exercises.questiontwo',
                'exercises.questionthree', 'exercises.questionfour', 'exercises.questionfive',
                'responses.responseone', 'responses.responsetwo', 'responses.responsethree',
                'responses.responsefour', 'responses.responsefive')
                .join('responde', 'exercises.id', '=', 'responde.exerc_id')
                .join('responses', 'responses.aluno_name', '=', 'responde.resp_name')
            return res.json(relational)
        } catch (error) {
            return res.json({error: 'Erro na listagem dos exercicios!'})
        }
    },

    async destroy(req, res){
        const { id } = req.params
        const [{created_at}] = await connection('responde').where('id', id).select('created_at')
        
        let date = new Date()
        let actualDay = date.getDay()

        if(actualDay === created_at + 2){
            try {
                await connection('exercises').where('id', id).delete()
                return res.status(200).json({ok: true})
            } catch (error) {
                return res.json(error)
            }
        }else{
            return res.json({Aguardando: true})
        }
    }
}