import {createServer} from 'node:http'
import process from 'node:process';
import { join } from 'path';
import { jsonFileService } from './shared/json-file.service.js';
// import data from './data.json' with { type: 'json' }

import pino from 'pino'


const { PORT = 4000, LOG_LEVEL = 'trace' } = process.env;

const logger = pino({
    level: LOG_LEVEL,
    transport: {
        target: 'pino-pretty'
    }
})


const server = createServer(async (req, res) => {

    // throw new Error('Oh No!')
   
    res.setHeader('Content-Type', 'application/json')

    switch(req.url) {
        case "/data":
            res.statusCode = 200
            const data = await jsonFileService.getDataFrom(join(import.meta.dirname, './data.json'));
            res.write(JSON.stringify(data))
            logger.info('Data requested %o', req.headers)
            break;
        default:
            res.statusCode = 404
            res.write(JSON.stringify({ "error": `404 - nie znam ścieżki ${req.url}`  }))
            logger.warn(`404 not found ${req.url} %o`, req.headers)
    }

    res.end();
});

server.listen(PORT)

server.on('listening', () => {
    console.log(`jestem... na procie: ${PORT}`)
    console.log(`poziom logowania: ${LOG_LEVEL}`)
})

// side-quest: obsługa błędów
process.on('uncaughtException', (e) => {
    console.error(e)
    console.log('----- złapane !')
})