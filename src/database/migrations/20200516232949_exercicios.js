exports.up = function(knex) {
    return knex.schema.createTable('exercises', function(table){
        table.increments()
        table.string('classe').notNullable()
        table.string('discipline').notNullable()
        table.string('title').notNullable()
        table.string('content').notNullable()
        
        table.string('questionone').notNullable()
        table.string('questiontwo').notNullable()
        table.string('questionthree').notNullable()
        table.string('questionfour').notNullable()
        table.string('questionfive').notNullable()
        table.decimal('created_at').notNullable()

        table.string('prof_id').notNullable()
        table.foreign('prof_id').references('id').inTable('professores')


    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('exercises')
};
