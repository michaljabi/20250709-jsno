import express from 'express';
import { env } from 'node:process'

import { ServerError } from './shared/server-error.js';

import { guestController } from './guests/guests.controller.js';
import { usersController } from './users/users.controller.js';

const { PORT } = env;
const app = express();

app.use(express.json());

app.all('/', (req, res) => {
    res.send({ hello: 'World' }) //.status(404)
})

app.use('/guests', guestController);
app.use('/users', usersController);

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