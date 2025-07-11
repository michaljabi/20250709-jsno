const guests = [
    {
        id: 1,
        uuid: '123e4567-e89b-12d3-a456-426614174000',
        name: 'Anna',
        lastName: 'Nowak',
        status: 'confirmed',
        updatedAt: '2025-07-08T12:00:00Z'
    },
    {
        id: 2,
        uuid: '123e4567-e89b-12d3-a456-426614174001',
        name: 'Jan',
        lastName: 'Kowalski',
        status: 'invited',
        updatedAt: '2025-07-08T13:00:00Z'
    },
    {
        id: 3,
        uuid: '123e4567-e89b-12d3-a456-426614174002',
        name: 'Maria',
        lastName: 'Wiśniewska',
        status: 'declined',
        updatedAt: '2025-07-08T14:00:00Z'
    }
]


export const guestsInMemoryDb = {
    async getAll() {
        return guests
    },
    addGuest(name, lastName) {
        const guest = {
                    id: Math.max(...guests.map(({id}) => id)) + 1,
                    name, 
                    lastName,
                    status: 'invited',
                    uuid: crypto.randomUUID(),
                    updatedAt: new Date()
                }
        guests.push(guest);
        return guest;
    },
    async getById(id) {
        return guests.find(guest => guest.id === id)
    },
    async getByStatus(status = '') {
        return guests.filter(guest => guest.status.startsWith(status))
    }
}


// await guestsInMemoryDb.getAll();