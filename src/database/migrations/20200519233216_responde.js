exports.up = function(knex) {
    return knex.schema.createTable('responde', function(table){
        table.increments()
        table.string('exerc_id')
        table.foreign('exerc_id').references('id').inTable('exercises')

        table.string('resp_name')
        table.foreign('resp_name').references('aluno_name').inTable('responses')
        
        table.decimal('created_at').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('responde')
};
