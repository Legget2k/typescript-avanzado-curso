import express from 'express';
import cors from 'cors';
import { NotesRouter } from './routes/notesRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/notes", NotesRouter);
app.use(errorHandler);

export { app };