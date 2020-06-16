const connection = require('../database/connection')
const crypto = require('crypto')


module.exports = {
    async store(req, res) {

        const access = 'cabral2020professores'
        
        const { name, accessCode } = req.body

        const id = crypto.randomBytes(4).toString('HEX')
        
        try {
            if(access === accessCode){
                await connection('professores').insert({
                    id,
                    name, 
                })
                return res.json({id, name})
            }else{
                return res.json({erro: 'Código de acesso inválido!'})
            }
        } catch (error) {
            return res.status(400).json({error: 'Erro ao cadastrar o professor!'})
        }

    }, 


}