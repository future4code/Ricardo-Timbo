import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { IdGenerator } from "./services/IdGenerator";
import { UserDatabase } from "./data/UserDataBase";



dotenv.config();

const app = express();

app.use(express.json());

const idGenerator = new IdGenerator();

const generatedId= idGenerator.generate();

const useDb = new UserDatabase();
useDb.createUser("001", "ricardo@email.com", "ricardo098");

app.post("/singup", async (req: Request, res: Response)=>{
  try{

  }catch (err){

  }
})


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

