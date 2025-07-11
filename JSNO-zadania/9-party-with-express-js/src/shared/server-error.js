export class ServerError extends Error {

    constructor(message, status = 400) {
        super(message)
        this.status = status;
    }

}