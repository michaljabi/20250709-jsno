import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'

const filePath = path.join(import.meta.dirname, '..', 'guests.json')

try {
    const data = await fs.readFile(filePath, 'utf8');
    const guests = JSON.parse(data);

    guests.push(makeGuest('Barbara', 'Gordon', guests.length+1))

    console.table(guests);

    const serializedData = JSON.stringify(guests, null , 2);
    await fs.writeFile(filePath, serializedData)
} catch (e) {
    console.error(e);
}

function makeGuest(name = '', lastName = '', nextId = 4) {
    return {
        id: nextId,
        name, 
        lastName,
        status: 'invited',
        uuid: crypto.randomUUID(),
        updatedAt: new Date()
    };
}