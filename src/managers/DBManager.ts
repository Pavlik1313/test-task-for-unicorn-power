import {usersModel} from "../db/DBModels";
export const doesUserExist = async (username: string) => {
    const user = await usersModel.findOne((user)=>user.username == username)
}