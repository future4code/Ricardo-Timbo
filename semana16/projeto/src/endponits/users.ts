import {Request, Response} from "express";
import {createUser} from "../data/users";

export const createUseEndpoint = async(req: Request, res: Response): Promise <void> => {
    try{
        await createUser(
            req.body.name,
            req.body.nickname,
            req.body.email
        )
        res.status(200). send({
            message: "Usuário criado com sucesso"
        })
    } catch (err){
        res.status(400).send({
            message: err.message
        })
    }
}
