import {check} from "express-validator";
import {Request, Response, NextFunction} from "express";

export default (req: Request, res: Response, next:NextFunction) => {
    check('id', 'Invalid id').isLength({min: 5})
    check('password', 'Password must be between 5 and 20 characters long').isLength({min: 5, max: 20})
    next()
}