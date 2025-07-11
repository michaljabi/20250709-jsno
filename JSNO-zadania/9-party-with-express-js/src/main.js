import express from 'express';
import { env } from 'node:process'
import { guestsInMemoryDb } from '../db/guests-in-memory-db.js'

const { PORT } = env;
const app = express();

app.use(express.json());

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
    // TODO: walidacja payloadu.... 
    if(!body.name) {
        throw new Error('Name of the guest is qequired')
    }

    const newGuest = guestsInMemoryDb.addGuest(body.name, body.lastName || '')

    res.status(201).send(newGuest)
})

// app.post('/', (req, res) => {
//     res.status(404).send({ hello: 'post' })
// })

app.listen(PORT, () => {
    console.log(`Nasłuchuje na porcie: ${PORT}`)
})