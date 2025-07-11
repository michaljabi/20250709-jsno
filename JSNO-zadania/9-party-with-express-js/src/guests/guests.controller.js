import { Router  } from "express";
import { guestsInMemoryDb } from '../../db/guests-in-memory-db.js'

export const guestController = new Router();


guestController.get('', async (req, res) => {
    const { status = '' } = req.query;
     res.send(await guestsInMemoryDb.getByStatus(status))
})

// GET http://localhost:4545/guests/1
// GET http://localhost:4545/guests/2
// GET http://localhost:4545/guests/90
// GET http://localhost:4545/guests/28
guestController.get('/:id', async (req, res) => {
    const { id } = req.params;
     res.send(await guestsInMemoryDb.getById(Number(id)))
})

guestController.post('', async (req, res) => {
    console.log(req.body)

    const { body } = req;
    // walidacja payloadu.... 
    if(!body.name) {
        throw new ServerError('Name of the guest is required')
    }
    const newGuest = guestsInMemoryDb.addGuest(body.name, body.lastName || '')

    res.status(201).send(newGuest)
})