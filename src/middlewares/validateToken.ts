import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
import tokensManager from "../managers/tokensManager";

export async function validateToken (req: Request, res: Response, next: NextFunction){
   try {
       const token = req.headers.authorization?.split(' ')[1];
       if (!token) {
           return res.status(403).send('Miss access token')
       }
       if (!await tokensManager.findToken(token)){
           return res.status(403).send('Invalid access token')
       }
       res.locals.user = jwt.verify(token, 'secret_key')
       res.locals.token = token
       next()
   }catch (e) {
       console.log(e)
       return res.status(403).send('Invalid access token')
   }

}