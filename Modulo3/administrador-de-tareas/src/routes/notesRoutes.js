//endpoints del crud
//GET /notes
//POST /notes
//PUT /notes/:id
//DELETE /notes/:id
import { Router } from "express";
import { createNotes, getNotes, getNotesById, updateNotes, deleteNotes } from "../controllers/notesControllers.js";

const NotesRouter = Router();

NotesRouter.get("/", getNotes);
NotesRouter.get("/:id", getNotesById);
NotesRouter.patch("/:id", updateNotes); // put -- patch -> put: actualiza todo el objeto, patch: actualiza solo una parte del objeto
NotesRouter.post("/:id", deleteNotes);

NotesRouter.post("/", createNotes);

export {NotesRouter};