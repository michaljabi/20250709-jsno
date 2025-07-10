import fs from 'node:fs/promises'

export const jsonFileService = {

    async getDataFrom(filePath = '') {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    },

    async saveDataTo(filePath = '', jsonData = {}) {
        const serializedData = JSON.stringify(jsonData, null , 2);
        await fs.writeFile(filePath, serializedData);
    }
}