import {usersModel} from "../db/DBModels";
import {UserI} from "../interfaces/UserI";

class UsersManager {
    async createUser(NewUser: UserI){
        try {
            await usersModel.create(NewUser);
        }catch (e) {
            console.log(e)
        }
    }
}
export default new UsersManager();