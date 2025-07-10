import { guestsService } from './guests/guests.service.js';
import chalk from 'chalk'

try {
    await guestsService.initData();

    guestsService.getAll().forEach((guest, idx) => {
        switch(guest.status) {
            case "invited":
                console.log(idx + 1, chalk.blue(`${guest.name} ${guest.lastName}`));
                break;
            case "confirmed":
                console.log(idx + 1,chalk.green(`${guest.name} ${guest.lastName}`));
                break;
            case "declined":
                console.log(idx + 1, chalk.red(`${guest.name} ${guest.lastName}`));
                break;
            default:
                console.log(idx + 1, `${guest.name} ${guest.lastName}`);
        }
    })
} catch (e) {
    console.error(e);
}
