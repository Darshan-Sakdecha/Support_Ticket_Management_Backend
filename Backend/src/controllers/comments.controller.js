import { TicketComments } from "../models/ticket_comments.model.js";
import { Ticket } from "../models/tickets.model.js";

const createComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { comment } = req.body;

        if (!id) {
            return res.status(400).json({
                message: "Id is required for comment"
            });
        }

        const ticket = await Ticket.findById(id);

        if (!comment) {
            return res.status(400).json({
                message: "Comment is required for add"
            });
        }

        if (!ticket) {
            return res.status(404).json({
                message: "Ticket not found"
            });
        }

        const createCom = await TicketComments.create({
            comment
        });

        res.status(201).json({
            message: "Comment created",
            createCom
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
}

const getByIdComment = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                message: "Id is required!"
            });
        }

        const ticketComment = await TicketComments.find();

        res.status(200).json({
            message: "Get all TicketComments successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
}

const patchComment = async (req, res) => {
    try {
        const com = await TicketComments.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!com) {
            return res.status(404).json({
                message: "comment not found"
            });
        }

        res.status(200).json({
            message: "comment updated",
            com
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
}

const deleteComment = async (req, res) => {
    try {
        const com = await TicketComments.findByIdAndDelete(req.params.id);

        if (!com) {
            return res.status(404).json({ message: "comment not found" });
        }

        res.status(200).json({ message: "comment deleted" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { createComment, deleteComment, patchComment, getByIdComment };