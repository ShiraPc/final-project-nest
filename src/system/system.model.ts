import * as mongoose from 'mongoose';

export const SystemSchema = new mongoose.Schema({
    admin_id:{type: String, required: true},
    name:{ type: String, required: true},
    description:{ type: String, required: true},
    subject:{ type: String, required: true},
    communicationDetails:{ type: String, required: true}
})

export class System {
    admin_id: string;
    name: string;
    description: string;
    subject: string;
    urlImage: string;
    communicationDetails:string;
}