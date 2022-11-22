import express from "express";
import authController from "../controllers/authController";
import infoController from "../controllers/infoController";
import {validateBody} from "../middlewares/validateCredentialsBody";
import {validateToken} from "../middlewares/validateToken";

const authRouter = express.Router();

authRouter.post('/singup', validateBody, authController.singUp)
          .post('/singin', validateBody, authController.singIn)
          .get('/info', validateToken, infoController.getInfo)
          .get('/logout', validateToken, authController.logOut)

export default authRouter