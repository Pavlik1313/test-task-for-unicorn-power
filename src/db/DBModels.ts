import * as mongoose from "mongoose";
import config from '../config'


mongoose.connect(config.db.url);

const Schema = mongoose.Schema;
const model = mongoose.model;

const usersSchema = new Schema(
    {
        id: {type: String, required: true},
        password: {type: String, required: true},
        idType: {type: String, required: true}
    }
)
const tokensSchema = new Schema(
    {
        userId: {type: String, required: true},
        token: {type: String, required: true},
        expiresIn: {type: Number, required: true}
    }
)

export const usersModel = model('users', usersSchema);
export const tokensModel = model('tokens', tokensSchema);

