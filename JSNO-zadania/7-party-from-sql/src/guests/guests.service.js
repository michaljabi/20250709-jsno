import crypto from 'node:crypto'
import knex from '../knex-client.js'

const TABLE_NAME = 'guests'

export const guestsService = {
    async initData(){},
    async addGuest(name = '', lastName = '', email = '') {
        return knex(TABLE_NAME).insert({
            name, 
            lastName,
            status: 'invited',
            uuid: crypto.randomUUID(),
            email: email ? email : null,
        })
    },
    async getAll() {
        return knex(TABLE_NAME); //.select(['uuid', 'name', 'last_name', 'status']);;
    }
}