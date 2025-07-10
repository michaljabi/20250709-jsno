
import chalk from 'chalk'
// export class ColorRules {

//     constructor(callback) {
//         this.condition = callback;
//     }
// }


export const colorPrinterService = {

    printCollection(collection, colorRules) {
        collection.forEach((el, idx) => {

            const {action, text} = colorRules(el)

            console.log(idx + 1, chalk[action](text))
        })
    }
}

/*
 const rules = {
            "invited": 'blue',
            "confirmed": 'green',
            "declined": 'red'
        }


console.log(rules.invited);
console.log(rules['invited']);
*/