import EventEmitter from "events";

// PROVIDER:
const emitter = new EventEmitter();

// CONSUMER 1:
emitter.on('my-event', (event) => {
    console.log(event)
    console.log(event.some);
    console.log(event?.some?.data)
})

// ACTION
// send event payload:
emitter.emit('my-event', { some: { id: 20, data: ['a', 'b'] } })


// CONSUMER 2:
emitter.on('my-event', (event) => {
    console.log(event)
})