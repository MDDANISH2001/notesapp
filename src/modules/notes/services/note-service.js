import NotesModel from "../models/note-schema.js"
import { nanoid } from "nanoid";
export const noteService = {
    async addNote(noteObject){
        try{
            noteObject.id = nanoid();
            const doc = await NotesModel.create(noteObject);
            return doc
        }
        catch(err){
            throw err;
        }
    },
    async readAllNote(){
        try{
            const docs = await NotesModel.find({}).select("titel descr cdate importance").exec();
            return docs;
        }
        catch(err){
            throw err;
        }
    }
}