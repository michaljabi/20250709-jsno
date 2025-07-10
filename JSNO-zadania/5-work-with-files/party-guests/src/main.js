import { guestsService } from './guests/guests.service.js';

try {
    await guestsService.initData();

    guestsService.addGuest('Jan', 'Kowalski');
    console.table(guestsService.getAll())

    await guestsService.saveData();
} catch (e) {
    console.error(e);
}
