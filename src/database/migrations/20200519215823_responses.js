exports.up = function(knex) {
    return knex.schema.createTable('responses', function(table){
        table.increments()
        table.string('responseone').notNullable()
        table.string('responsetwo').notNullable()
        table.string('responsethree').notNullable()
        table.string('responsefour').notNullable()
        table.string('responsefive').notNullable()
    
        table.string('aluno_name').notNullable()
        table.foreign('aluno_name').references('name').inTable('alunos')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTabçe('responses')
};
