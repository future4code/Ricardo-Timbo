import knex from 'knex';
import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from 'net';



const app = express();
app.use(express.json());

dotenv.config();

const connection = knex({ 
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port:3306,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_DATABASE_NAME
    }
})

const server = app.listen(process.env.PORT || 3306, () =>{
    if(server){
        const adress = server.address() as AddressInfo;
        console.log(`Server ir running in http://localhost:${adress.port}`);
    } else {
        console.error(`Failure upon starting server`);
    }
})


const getActorById = async (id:string): Promise<any> =>{
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE id='${id}'
    `)
    return console.log(result [0][0])
}


const getActorByName = async (name:string) : Promise<any> =>{
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name LIKE '%${name}%'
    `)
    return console.log(result [0])
}



//TODO adicionar um enum
const countGender = async (gender:string) :Promise<any> =>{
    const result = await connection.raw(`
        SELECT COUNT (*) as count FROM Actor WHERE gender ="${gender}"
    `)
    const count = result [0][0].count;
    return console.log(count);
}


const createActor = async (id: string, name: string, salary: number, dateOfBirth: Date, gender: string): Promise<void> =>{
    await connection.insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
    })
    .into("Actor")
};

const updateSalary = async(id: string, salary: number): Promise<void> =>{
    await connection("Actor").update({
        salary: salary,
    })
    .where("id", id);
};

const deleteActor = async (id:String) :Promise <void> => {
    await connection("Actor")
    .delete()
    .where("id", id)
}

createActor("006","Tony Ramos", 400000, new Date(1948-8-25) , "male");