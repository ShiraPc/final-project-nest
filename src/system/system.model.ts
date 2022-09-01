import * as mongoose from 'mongoose';

export const SystemSchema = new mongoose.Schema({
    topic: { type: String, required: true},
    urlName: { type: String, required: true, unique: true},
    urlImage:{type: String, required: true},
    objectName: { type: String, required: true },
    manager_id: { type: String, required: true },
    description: { type: String, required: true },
    communicationDetails: { type: Object,  required: true }
})

export class System {
    uid: string;
    topic: string;
    urlName: string;
    urlImage: string;
    objectName: string;
    manager_id: string;
    description: string;
    communicationDetails: Object;
}