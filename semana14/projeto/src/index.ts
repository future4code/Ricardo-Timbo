import moment from "moment"
import * as fs from "fs";


type Conta = {
    nome: string;
    cpf: string;
    dataDeNascimento: string;
    saldo: number;
    extrato: Movimentacao[];
}

type Movimentacao = {
      descricao: string;
      valor: number;
      data: string;
}

const criarconta = (nome: string, nascimento: string, cpf: string) => {
    const dataDeNascimento = moment(nascimento, "DD/MM/YYYY")
    const today = moment();
    const idade = today.diff(dataDeNascimento, "anos")
    if (idade < 18) {
        console.log("Para abir a conta é necessario ter 18 anos ou mais ")
        return;
    }
    const pFPath = "C:/Users/rcard/Documents/Future4/Ricardo-Timbo/semana14/projeto/pessoaFisica.json"
    const pFData: Buffer = fs.readFileSync(pFPath)
    const pFString: string = pFData.toString()
    const clientPF: Conta[] = JSON.parse(pFString)
    const buscarCPF = clientPF.find((cliente: Conta) =>{
        return cliente.cpf === cpf;
    })
    if (buscarCPF !== undefined) {
        console.log("CPF já cadastrado. Verifique o CPF")
    }
}





//----------------------------------------------------------------------------

// const createAccount = (name: string, birthDateString: string, cpf: string) => {
// 

//   // 2. Parsear o arquivo
//   const users: Account[] = JSON.parse(usersString);
//   //2,5. Validar o CPF
//   const foundUser = users.find((user: Account) => {
//     return user.cpf === cpf;
//   });
//   if (foundUser !== undefined) {
//     console.log("Já existe um usuário com esse CPF");
//     return;
//   }
//   // 3. Adiciono o ususário no array
//   users.push({
//     name: name,
//     birthDate: birthDateString,
//     cpf: cpf,
//     balance: 0,
//     extract: [],
//   });
//   console.log(users);
//   // 4. Reescrevo o arquivo todo
//   const usersStringified = JSON.stringify(users, null, 2);
//   fs.writeFileSync(usersFilePath, usersStringified);
// };
// const name = process.argv[2];
// const date = process.argv[3];
// const cpf = process.argv[4];
// createAccount(name, date, cpf);