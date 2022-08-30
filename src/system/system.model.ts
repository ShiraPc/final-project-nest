import * as mongoose from 'mongoose';

export const SystemSchema = new mongoose.Schema({
    topic: { type: String, required: true},
    urlName: { type: String, required: true, unique: true},
    objectName: { type: String, required: true },
    managerUid: { type: String, required: true },
    description: { type: String, required: true },
    communicationDetails: { type: Object,  required: true }
})

export class System {
    uid: string;
    topic: string;
    urlName: string;
    urlImage: string;
    objectName: string;
    managerUid: string;
    description: string;
    communicationDetails: Object;
}