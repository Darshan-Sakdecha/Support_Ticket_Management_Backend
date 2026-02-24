import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title must be required for Ticket!"],
        minlength: [5, "title should contain more than 5 character"],
    },
    description: {
        type: String,
        required: [true, "Description must be required for Ticket!"],
        minlength: [10, "description should contain more than 10 character"],
    },
    status: {
        type: String,
        enum: ["OPEN", "IN_PROGRESS", "RESOLVED", "CLOSED"],
        default: "OPEN",
        required:true,
    },
    priority: {
        type: String,
        enum: ["LOW", "MEDIUM", "HIGH"],
        default: "MEDIUM",
        required:true,
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    assigned_to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

}, { timestamps: true });

const Ticket = mongoose.model("Ticket", ticketSchema);

export { Ticket };