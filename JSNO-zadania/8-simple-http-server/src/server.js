import {createServer} from 'node:http'
import process from 'node:process';
// side-quest: obsługa błędów

const server = createServer((req, res) => {

    // throw new Error('Oh No!')
    res.statusCode = 404
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(process.env))
    res.end();
    // process.exit(0);
});


server.listen(3035)

server.on('listening', () => {
    console.log('jestem...')
})


process.on('uncaughtException', (e) => {
    console.error(e)
    console.log('----- złapane !')
})