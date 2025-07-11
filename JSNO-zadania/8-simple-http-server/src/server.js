import {createServer} from 'node:http'
import process from 'node:process';
// side-quest: obsługa błędów


const { PORT } = process.env;

const server = createServer((req, res) => {

    // throw new Error('Oh No!')
    res.statusCode = 404
    res.setHeader('Content-Type', 'application/json')
    res.write(`port: ${PORT}`)
    res.end();
    // process.exit(0);
});

server.listen(PORT)

server.on('listening', () => {
    console.log(`jestem... na procie: ${PORT}`)
})


process.on('uncaughtException', (e) => {
    console.error(e)
    console.log('----- złapane !')
})