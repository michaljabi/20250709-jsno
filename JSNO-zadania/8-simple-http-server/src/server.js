import {createServer} from 'node:http'


const server = createServer((req, res) => {

    res.write('HELLO WORLD')
    res.end();
});


server.listen(3035)

server.on('listening', () => {
    console.log('jestem...')
})