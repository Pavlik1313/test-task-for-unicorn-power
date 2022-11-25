import {Request, Response} from "express";

class InfoController {
    getInfo(req: Request, res: Response){
        try {
            const {id, idType} = res.locals.user
            return res.send({id, idType})
        }catch (e) {
            console.log(e);

        }
    }
}
export default new InfoController();