import { guestsService } from './guests/guests.service.js';
import { colorPrinterService } from './shared/color-printer.service.js';

try {
    await guestsService.initData();

    // guestsService.getAll().forEach((guest, idx) => {
    //     switch(guest.status) {
    //         case "invited":
    //             console.log(idx + 1, chalk.blue(`${guest.name} ${guest.lastName}`));
    //             break;
    //         case "confirmed":
    //             console.log(idx + 1,chalk.green(`${guest.name} ${guest.lastName}`));
    //             break;
    //         case "declined":
    //             console.log(idx + 1, chalk.red(`${guest.name} ${guest.lastName}`));
    //             break;
    //         default:
    //             console.log(idx + 1, `${guest.name} ${guest.lastName}`);
    //     }
    // })

    colorPrinterService.printCollection(guestsService.getAll(), (guest) => {
        const rules = {
            "invited": 'blue',
            "confirmed": 'bgGreen',
            "declined": 'red'
        }
        return { 
            action: rules[guest.status], 
            text: `${guest.name} ${guest.lastName}`
         };
    } )

} catch (e) {
    console.error(e);
}
