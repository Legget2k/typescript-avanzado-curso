//endpoints del crud
//GET /notes
//POST /notes
//PUT /notes/:id
//DELETE /notes/:id
import { Router } from "express";
import { createNotes } from "../controllers/notesControllers.js";

const NotesRouter = Router();

NotesRouter.post("/", createNotes);

export {NotesRouter};