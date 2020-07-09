## Exercicios Aula 53

### 1.
a) temos a resposta de um array dentro de um array por isso [0][0], que é a possição dentro dos array, o raw é uma função assincrona por isso devolve promisses

b) const getActorByName = async (name:string) : Promise<any> =>{
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name LIKE '%${name}%'
    `)
    return console.log(result [0])
}

c) const countGender = async (gender:string) :Promise<any> =>{
    const result = await connection.raw(`
        SELECT COUNT (*) as count FROM Actor WHERE gender ="${gender}"
    `)
    const count = result [0][0].count;
    return console.log(count);
}

### 2.

a) const updateSalary = async(id: string, salary: number): Promise<void> =>{
    await connection("Actor").update({
        salary: salary,
    })
    .where("id", id);
};

b) const deleteActor = async (id:String) :Promise <void> => {
    await connection("Actor")
    .delete()
    .where("id", id)
}

c) const avgSalary = async (gender:string):Promise <any> => {
    const result = await connection("Actor")
        .avg("salary as avenge")
        .where({gender});

    return console.log(result[0].avenge)
}

### 3.

a) 

b) try retorna sucesso com status 200 (caso de certo a requsição), catch é para erros com status 400

c) 





