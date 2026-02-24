import express from 'express';
import { registerUserRoute } from './routes/registerUser.routes.js';
import { loginRoute } from './routes/auth.routes.js';
import { ticketRoute } from './routes/tickets.routes.js';

const app = express();

app.use(express.json());

//register user by manager :
app.use("/users", registerUserRoute);
//login : 
app.use("/auth", loginRoute);
// ticket : 
app.use("/tickets", ticketRoute);

export { app };