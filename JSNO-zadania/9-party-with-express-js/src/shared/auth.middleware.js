import { env } from 'node:process'
import { ServerError } from './server-error.js';

const { AUTH_SECRET } = env;

export function authMiddleware(req, res, next) {
    const auth = req.headers['authorization'] 
    if(!auth) {
        return next(new ServerError('Unauthorized', 401))
    }
    if(auth !== AUTH_SECRET) {
        // throw new ServerError('You shall not pass', 403)
        return next(new ServerError('You shall not pass', 403))
    }
    next();
}