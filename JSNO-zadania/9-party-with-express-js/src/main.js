import express from 'express';
import { env } from 'node:process'
import { guestsInMemoryDb } from '../db/guests-in-memory-db.js'
import { ServerError } from './shared/server-error.js';

const { PORT } = env;
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    const auth =  req.headers['authorization'] 
    if(!auth) {
        // throw new ServerError('You shall not pass', 403)
        return next(new ServerError('You shall not pass', 403))
    }
    // res.send({ hey: 'troll' })
    next();
})

app.all('/', (req, res) => {
    res.send({ hello: 'World' }) //.status(404)
})

app.get('/guests', async (req, res) => {
    // console.log(req.query)
    const { status = '' } = req.query;
    // if(status) {
    //     return res.send(await guestsInMemoryDb.getByStatus(status))
    // }
    // res.send(await guestsInMemoryDb.getAll())
     res.send(await guestsInMemoryDb.getByStatus(status))
})

app.post('/guests', async (req, res) => {
    console.log(req.body)

    const { body } = req;
    // walidacja payloadu.... 
    if(!body.name) {
        throw new ServerError('Name of the guest is required')
        // return res.status(400).send({ error: 'Name of the guest is required' })
    }

    const newGuest = guestsInMemoryDb.addGuest(body.name, body.lastName || '')

    res.status(201).send(newGuest)
})

app.all('/{*splat}', (req, res) => {
	res.send({ error: `Cannot find page ${req.url} for method ${req.method}` });
})

app.use((err, req, res, next) => {

     console.error(err)
     let status = 500;
     if(err instanceof ServerError) {
        status = err.status
     } 
     res.status(status).send({error: err.message })
})

app.listen(PORT, () => {
    console.log(`Nasłuchuje na porcie: ${PORT}`)
})