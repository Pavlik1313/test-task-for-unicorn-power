import {Request, Response} from "express";
import {usersModel} from "../db/DBModels";

class AuthController {
    singUp (req: Request, res: Response){
        try{
            const {username, password} = req.body;
            const user
        }catch (e) {
            console.log(e);
        }
    }


    singIn (req: Request, res: Response){
        try{

        }catch (e) {
            console.log(e);
        }
    }


    logOut (req: Request, res: Response){
        try{

        }catch (e) {
            console.log(e);
        }
    }
}
export default new AuthController();