import express from 'express';
import { loginUser } from '../controllers/auth.controller.js';

const loginRoute = express.Router();

loginRoute.post("/login",loginUser);

export {loginRoute};