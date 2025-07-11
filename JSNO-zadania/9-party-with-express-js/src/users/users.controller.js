import { Router  } from "express";
import { authMiddleware } from "../shared/auth.middleware.js";


export const usersController = new Router();


usersController.use(authMiddleware)

usersController.all('', (req, res) => {
    res.send([])
})