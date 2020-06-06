const connection = require('../database/connection')

module.exports = {
    async store(req, res){
        const { 
            classe, discipline, title, content, questionone, questiontwo,
            questionthree, questionfour, questionfive } = req.body
        const { prof_id } = req.headers

        let date = new Date()

        try {
            const [id] = await connection('exercises').insert({
                classe,
                discipline,
                title,
                content,
                questionone,
                questiontwo,
                questionthree,
                questionfour,
                questionfive,
                prof_id,
                created_at: date.getDay()
            })
            return res.json({id})

        } catch (error) {
            return res.status(400).json({error: 'Não foi possível cadastrar exercício!'})
        }
    },

    async index(req, res){
        try {
            const exercisesList = await connection('exercises').select('*')
            return res.json(exercisesList)
        } catch (error) {
            return res.status(404).json({error: 'Erro ao listar exercicios!'})
        }
    },

    async show(req, res){
        try {
            const id = await connection('exercises').select('id')
            return res.json(id)
        } catch (error) {
            return res.status(400)
        }
    },

    async destroy(req, res){
        const { id } = req.params
        const [{created_at}] = await connection('exercises').where('id', id).select('created_at')
        
        let date = new Date()
        let dayLimit = date.getDay()

        if(dayLimit === created_at + 2){
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