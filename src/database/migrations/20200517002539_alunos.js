exports.up = function(knex) {
    return knex.schema.createTable('alunos', function(table){
        table.string('id').primary()
        table.string('name').notNullable()
        table.string('classe').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('alunos')
};
