import tokensManager from "../managers/tokensManager";
import {Md5} from 'ts-md5'
import {Request, Response} from "express";
import {usersModel} from "../db/DBModels";
import {isItEmail, isItPhoneNumber} from "../helpers/helpers";
import DBManager from "../managers/usersManager";


class AuthController {
    async singUp (req: Request, res: Response){
        try{
            const {id, password} = req.body;
            if (await usersModel.exists({id})){
                return res.status(400).send(`User with id '${id}' already exists`)
            }
            if (isItPhoneNumber(id)||isItEmail(id)){
                const passwordHash = Md5.hashStr(password);
                const idType =  isItPhoneNumber(id) ? 'phone' : 'email';
                await DBManager.createUser({
                    id,
                    password: passwordHash,
                    idType
                })
                return res.send(await tokensManager.generateAccessToken(id, idType))
            }else {
                return res.status(400).send(`Invalid id: '${id}' `)
            }



        }catch (e) {
            console.log(e);
        }
    }


    async singIn (req: Request, res: Response){
        try{
            const {id, password} = req.body;
            const user = await usersModel.findOne({id});
            if (user){
                const passwordHash = Md5.hashStr(password);
                if(passwordHash == user.password){
                    return res.send(await tokensManager.generateAccessToken(id, user.idType))
                }else return res.status(400).send('Wrong password');
            }else return res.status(400).send(`User with id '${id}' doesn't exist`);

        }catch (e) {
            console.log(e);
        }
    }


    async logOut (req: Request, res: Response){
        try {
            const all = Boolean(req.query.all) ;
            const {user} = res.locals;
            const token = res.locals.token;
            if (all) await tokensManager.deleteAllTokens(user.id)
            else await tokensManager.deleteToken(token)

            return res.sendStatus(200)
        }
        catch (e) {
            console.log(e);
        }
    }
}
export default new AuthController();