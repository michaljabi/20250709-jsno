import path from 'node:path'
import crypto from 'node:crypto'
import { jsonFileService } from './json-file.service.js';

const filePath = path.join(import.meta.dirname, '..', 'guests.json')

let guests = [];
let nextId = 1;

export const guestsService = {
    async initData(){
        const formFile = await jsonFileService.getDataFrom(filePath);
        guests = formFile;
        // nextId = Math.max(...guests.map(g => g.id)) + 1;
        nextId = Math.max(...guests.map(({id}) => id)) + 1;
    },
    addGuest(name = '', lastName = '') {
        guests.push({
            id: nextId,
            name, 
            lastName,
            status: 'invited',
            uuid: crypto.randomUUID(),
            updatedAt: new Date()
        });
    },
    getAll() {
        return guests;
    },
    async saveData() {
        await jsonFileService.saveDataTo(filePath, guests);
    }
}