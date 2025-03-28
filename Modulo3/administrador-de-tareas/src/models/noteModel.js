//la declaracon del esquema o modelo de una nota para mongoDB
import Mongoose from "mongoose";

const noteSchema = new Mongoose.Schema({
    title: { type: String, required: true },
    done: { type: Boolean, default: false }
}, {timestamps: true,versionKey: false});

const Note = Mongoose.model('note', noteSchema);

export {Note};

