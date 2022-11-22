import jwt from 'jsonwebtoken'
import {tokensModel} from "../db/DBModels";
import config from "../config";

class TokensManager{
    async deleteExpiresTokens (id: string) {
        await tokensModel.deleteMany({id, expiresIn: {$lt:Date.now()}})
    }
    async deleteToken (token: string) {
        await tokensModel.deleteOne({token})
    }
    async deleteAllTokens (id: string) {
        await tokensModel.deleteMany({id})
    }
    async findToken (token: string) {
        return tokensModel.findOne({token})
    }
    async generateAccessToken (id: string, idType: string) {
        await this.deleteExpiresTokens(id);
        const payload = {
            id,
            idType
        }
        const token = jwt.sign(payload, config.jwt.secret, {expiresIn: config.jwt.expiresIn})
        const expiresIn = Date.now() + config.jwt.expiresInMilliseconds;
        await tokensModel.create({userId: id, token, expiresIn})
        return token
    }
}

export default new TokensManager();
