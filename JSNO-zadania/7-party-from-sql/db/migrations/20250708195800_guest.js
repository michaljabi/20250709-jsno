/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable('guests', (table) => {
        table.increments('id').primary();
        table.uuid('uuid').notNullable().unique();
        table.string('name').notNullable();
        table.string('last_name');
        table.enu('status', ['confirmed', 'invited', 'declined']).notNullable();
        table.timestamps(false, true)
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    await knex.schema.dropTable('guests');
}
