const connection = require('../database/connection')
const crypto = require('crypto')


module.exports = {
    async store(req, res) {
        
        const { name } = req.body

        const id = crypto.randomBytes(4).toString('HEX')

        try {
            await connection('professores').insert({
                id,
                name, 
            })
            return res.json({id, name})
        } catch (error) {
            return res.status(400).json({error: 'Erro ao cadastrar o professor!'})
        }
    }, 


}