import { Ticket } from "../models/tickets.model.js";

const createTicket = async (req, res) => {
    try {
        const { title, description, priority, status, created_by, assigned_to } = req.body;
        // console.log(req.body);

        if (!title || !description || !priority) {
            return res.status(400).json({
                message: "Enter proper details"
            });
        }

        const ticket = await Ticket.create({
            title, description, status, priority,
            created_by,
            assigned_to
        });


        res.status(201).json({
            message: "Ticket created successfully",
            ticket
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
}

const getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();

        if (!tickets) {
            return res.status(404).json({
                message: "Tickets is not get"
            });
        }
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
}

const assignTicketUpdate = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!ticket) {
            return res.status(404).json({
                message: "ticket not found"
            });
        }

        res.status(200).json({
            message: "ticket updated",
            ticket
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
}

const statusTicketUpdate = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!ticket) {
            return res.status(404).json({
                message: "ticket not found"
            });
        }

        res.status(200).json({
            message: "ticket updated",
            ticket
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
}

const deleteTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndDelete(req.params.id);

        if (!ticket) {
            return res.status(404).json({ message: "ticket not found" });
        }

        res.status(200).json({ message: "ticket deleted" });
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
}

export { createTicket, statusTicketUpdate, assignTicketUpdate, deleteTicket, getTickets };

