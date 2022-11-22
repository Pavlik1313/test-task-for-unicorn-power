import * as mongoose from "mongoose";


mongoose.connect("mongodb://localhost:27017/pavlyuk-test-task-for-unicorn-power");

const Schema = mongoose.Schema;
const model = mongoose.model;

const usersSchema = new Schema(
    {
        id: {type: String},
        password: {type: String},
        idType: {type: String}
    }
)

export const usersModel = model('users', usersSchema);

