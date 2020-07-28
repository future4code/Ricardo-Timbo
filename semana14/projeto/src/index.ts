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
    const idade = today.diff(dataDeNascimento, "years")
    if (idade < 18) {
        console.log("Para abir a conta é necessario ter 18 anos ou mais ")
        return;
    }
    const pFPath = "C:/Users/rcard/Documents/Future4/Ricardo-Timbo/semana14/projeto/pessoaFisica.json"
    const pFData: Buffer = fs.readFileSync(pFPath)
    const pFString: string = pFData.toString()
    const clientePF: Conta[] = JSON.parse(pFString)
    const buscarCPF = clientePF.find((cliente: Conta) =>{
        return cliente.cpf === cpf;
    })
    if (buscarCPF !== undefined) {
        console.log("CPF já cadastrado. Verifique o CPF")
        return
    }
    clientePF.push({
        nome,
        cpf,
        dataDeNascimento: nascimento,
        saldo: 0,
        extrato: []
    })
    const clientePFCampo = JSON.stringify(clientePF, null, 2)
    fs.writeFileSync(pFPath, clientePFCampo)
}
const nome = process.argv[2]
const cpf = process.argv[3];
const dataDeNascimento = process.argv[4];
criarconta(nome, cpf, dataDeNascimento);


