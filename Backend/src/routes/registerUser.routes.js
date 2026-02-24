import express from 'express';
import { getAllUsers, registerUser } from '../controllers/registerUserByManager.controller.js';
import { auth, role } from '../middlewares/auth.middleware.js';

const registerUserRoute = express.Router();

registerUserRoute.post("/", registerUser);
registerUserRoute.get("/", auth, role("MANAGER"), getAllUsers);
export { registerUserRoute };