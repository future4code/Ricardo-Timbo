class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[];
  
    constructor( cpf: string, name: string, age: number,) {
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
      public getBalance(): number {
      //Aqui deve ser inserida a lógica de pegar saldo do usuário
      }
  
      public addBalance(value: number): void {
      //Aqui deve ser inserida a lógica de adicionar saldo 
        console.log('Saldo atualizado com sucesso')
      }
  
  }

  const myAccount: UserAccount = new UserAccount("124.254.369-45", "Ricardo", 31)

  console.log(myAccount)