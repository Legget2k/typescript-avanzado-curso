// recibir y responder al usuario
import { Note } from '../models/noteModel.js';

export const createNotes = async (req, res) => {
    try {
        const {text} = req.body;
        const newNote = new Note({
            title: text
        });
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    }catch (error) {
        next(error);
    }
};