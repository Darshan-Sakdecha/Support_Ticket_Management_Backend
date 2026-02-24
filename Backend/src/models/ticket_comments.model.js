import mongoose from "mongoose";

const ticketcommentsSchema = new mongoose.Schema({
    ticket_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket",
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    comment: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const TicketComments = mongoose.model("TicketComments", ticketcommentsSchema);

export { TicketComments };