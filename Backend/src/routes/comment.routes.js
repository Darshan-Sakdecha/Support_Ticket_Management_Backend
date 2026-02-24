import express from 'express';
import { createComment, deleteComment, getByIdComment, patchComment } from '../controllers/comments.controller.js';
import { auth, role } from '../middlewares/auth.middleware';

const commentRoute = express.Router();

commentRoute.post("/tickets/:id/comments", auth, createComment);
commentRoute.get("/tickets/:id/comments", auth, getByIdComment);
commentRoute.patch("/comments/:id", auth, role("MANAGER"), patchComment);
commentRoute.delete("/comments/:id", auth, role("MANAGER"), deleteComment);

export { commentRoute };