import express from 'express';
import { env } from 'node:process'

const { PORT } = env;
const app = express();

app.all('/', (req, res) => {
    res.send({ hello: 'World' }) //.status(404)
})

// app.post('/', (req, res) => {
//     res.status(404).send({ hello: 'post' })
// })

app.listen(PORT, () => {
    console.log(`Nasłuchuje na porcie: ${PORT}`)
})