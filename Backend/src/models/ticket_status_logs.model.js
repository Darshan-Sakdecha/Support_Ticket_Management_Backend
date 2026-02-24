import mongoose from "mongoose";

const ticketStatusLogsSchema = new mongoose.Schema({
    ticket_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket",
        required: true,
    },
    old_status: {
        type: String,
        enum: ["OPEN", "IN_PROGRESS", "RESOLVED", "CLOSED"],
        required: true,
        default: "OPEN"
    },
    new_status: {
        type: String,
        enum: ["OPEN", "IN_PROGRESS", "RESOLVED", "CLOSED"],
        required: true,
        default: "OPEN",
    },
    changed_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, { timestamps: true });

const TicketStatusLogs = mongoose.model("TicketStatusLogs", ticketStatusLogsSchema);

export { TicketStatusLogs };