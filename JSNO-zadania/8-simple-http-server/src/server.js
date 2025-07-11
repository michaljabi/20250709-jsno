import {createServer} from 'node:http'
import process from 'node:process';
import data from './data.json' with { type: 'json' }



const { PORT } = process.env;

const server = createServer((req, res) => {

    // throw new Error('Oh No!')
   
    res.setHeader('Content-Type', 'application/json')

    switch(req.url) {
        case "/data":
            res.statusCode = 200
            res.write(JSON.stringify(data))
            break;
        default:
            res.statusCode = 404
            res.write(JSON.stringify({ "error": `404 - nie znam ścieżki ${req.url}`  }))
    }

    res.end();
});

server.listen(PORT)

server.on('listening', () => {
    console.log(`jestem... na procie: ${PORT}`)
})

// side-quest: obsługa błędów
process.on('uncaughtException', (e) => {
    console.error(e)
    console.log('----- złapane !')
})