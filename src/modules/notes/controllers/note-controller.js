import { noteService } from "../services/note-service.js";
import {STATUS_CODE} from "../../../shared/utils/app-constants.js";
 const noteController = {
    async getAllNotes(request, response){
        try{
        const docs = await noteService.readAllNotes();
        response.status(STATUS_CODES.SUCCESS).json({'notes':docs});
        }
        catch(err){
            response.status(STATUS_CODES.SERVER_ERROR).json({message:'Problem in Fetching Notes'});
            console.log(err);
        }
    },
    async addNote(request, response){
        const noteBody = request.body;
        console.log('Data Rec by Controller ', noteBody);
        try{
        const doc = await noteService.addNote(noteBody);
        if(doc && doc.title){
            response.status(STATUS_CODE.SUCCESS).json({message:'Note Added SuccessFully'});
        }
        else{
            response.status(STATUS_CODE.RESOURCE_NOT_FOUND).json({message:'Not Able to Add a Note'});
        }
        }
        catch(err){
            response.status(STATUS_CODE.SERVER_ERROR).json({message:'Error in Adding Note'});
            console.log(err);
        }
        }
    }
    export default noteController;
