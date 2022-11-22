import Ajv, {JSONSchemaType} from 'ajv';
import {CredentialsI} from "../interfaces/UserI";
import {Request, Response, NextFunction} from "express";


const ajv = new Ajv();
const credentialsSchema: JSONSchemaType<CredentialsI> = {
    type: "object",
    properties: {
        id: {type: "string"},
        password: {type: "string"}
    },
    required: ["id","password"],
    additionalProperties: false
}
const validate = ajv.compile(credentialsSchema)
export const validateBody = (req: Request, res: Response, next: NextFunction) => {
    const credentialsIsValid = validate(req.body)
    if (credentialsIsValid) next()
    else return res.status(400).send(validate.errors)
}


