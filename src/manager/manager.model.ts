import * as mongoose from 'mongoose';
import { role } from 'src/DTO/manager.dto';


export const ManagerSchema = new mongoose.Schema({
    user_id:{ type: String, required: true},
    system_id:{ type: String, required: true},
    active: { type: Boolean, default: false },
    display_name:{ type: String, required: true},
    role:{ type: role, required: true},
    invitation_sent:[{ type: Array, default: [] }]

})

export class Manager {
user_id:string;
    system_id:string;
    active:boolean;
    display_name:string;
    role:role;
    invitation_sent: [];
}