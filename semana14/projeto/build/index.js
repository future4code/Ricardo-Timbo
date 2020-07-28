"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const fs = __importStar(require("fs"));
const criarconta = (nome, nascimento, cpf) => {
    const dataDeNascimento = moment_1.default(nascimento, "DD/MM/YYYY");
    const today = moment_1.default();
    const idade = today.diff(dataDeNascimento, "years");
    if (idade < 18) {
        console.log("Para abir a conta é necessario ter 18 anos ou mais ");
        return;
    }
    const pFPath = "C:/Users/rcard/Documents/Future4/Ricardo-Timbo/semana14/projeto/pessoaFisica.json";
    const pFData = fs.readFileSync(pFPath);
    const pFString = pFData.toString();
    const clientePF = JSON.parse(pFString);
    const buscarCPF = clientePF.find((cliente) => {
        return cliente.cpf === cpf;
    });
    if (buscarCPF !== undefined) {
        console.log("CPF já cadastrado. Verifique o CPF");
        return;
    }
    clientePF.push({
        nome,
        cpf,
        dataDeNascimento: nascimento,
        saldo: 0,
        extrato: []
    });
    const clientePFCampo = JSON.stringify(clientePF, null, 2);
    fs.writeFileSync(pFPath, clientePFCampo);
};
const nome = process.argv[2];
const cpf = process.argv[3];
const dataDeNascimento = process.argv[4];
criarconta(nome, cpf, dataDeNascimento);
