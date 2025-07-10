import { guestsService} from './guests/guests.service.js'


// const data = await knex('guests').select(['uuid', 'name', 'last_name', 'status']);

// console.table(data)

try {
    const newId = await guestsService.addGuest('Jan', 'Kowalski');

    console.log('NEW RECORD', newId)
    console.table(await guestsService.getAll())

} catch (e) {
    console.error(e);
}
