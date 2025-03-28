// recibir y responder al usuario
import  Mongoose  from 'mongoose';
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

export const getNotes = async (req, res, next) => {try {
    const notes = await Note.find();
    notes.json(notes);
} catch (error) {
    next(error);
}}

export const getNotesById = async (req, res, next) => {try {
    const { id } = req.params;
    const note = await Note.findById(id);
    if (!note) {
        const error = new Error(`Note with id ${id} not found`);
        error.code = 404;
        throw error;
    }
    res.json(note);
} catch (error) {
    next(error);
}}

export const updateNotes = async (req, res, next) => {try {
    const { id } = req.params;
    const { body } = req;

    if(!Mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: "Invalid ObjectId format"});
    }

    const updatedNote = await Note.findByIdAndUpdate(id, body, {new: true});
    if (!updatedNote) { res.status(404).json({message: `Note not found`}); }
    res.json(updatedNote);

} catch (error) {
    next(error);
}}

export const deleteNotes = async (req, res, next) => {try {
    const { id } = req.params;
    if(!Mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: "Invalid ObjectId format"});
    }
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) { res.status(404).json({message: `Note not found`}); }
} catch (error) {
    next(error);
}}
