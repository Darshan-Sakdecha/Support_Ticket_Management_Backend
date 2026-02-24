import express from "express";
import { assignTicketUpdate, createTicket, deleteTicket, getTickets, statusTicketUpdate } from "../controllers/ticket.controller.js";
import { auth, role } from "../middlewares/auth.middleware.js";

const ticketRoute = express.Router();

ticketRoute.post("/", auth, role("USER", "MANAGER"), createTicket);
ticketRoute.get("/", auth, role("USER", "MANAGER", "SUPPORT"), getTickets);
ticketRoute.patch("/:id/assign", auth, role("MANAGER", "SUPPORT"), assignTicketUpdate);
ticketRoute.patch("/:id/status", auth, role("MANAGER", "SUPPORT"), statusTicketUpdate);
ticketRoute.delete("/:id", auth, role("MANAGER"), deleteTicket);

export { ticketRoute }