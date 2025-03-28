import express from 'express';
import cors from 'cors';
import { connectDB } from './config/mongoConnection.js';

const app = express();
app.use(cors());

connectDB();

app.post("/api/notes", async (req, res) => {
    try {
        const {text} = req.body;
        const newNote = new Note({
            title: text
        });
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    }catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export { app };  