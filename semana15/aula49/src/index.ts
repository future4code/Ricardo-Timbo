//1 
//a) não é possivel acessar o passwaord pq não possui um getter do passoword na classe User
//b)  uma unica vez, porque só tinha uma unica instancia

//2
//a) apenas uma vez só há uma instancia do Customer
//b) 2 vezes pq tem um user e um Customer, o Customer é um User, já que a Customer é uma classe filha da classe User

//3 
//a) não pq o Customer tmb não possui um metodo Getter, ele herda esse atributo do Pai USer que tem esse atributo privado

//4

//5 

//6
//a)3 vezes uma para user e 2 paras os das classes filhas
//b)todos menos a senha

//7


import {User} from "./User";
import {Customer} from "./Customer";
import {Employee} from "./Employee";
import {Seller} from "./Seller"

const myUser: User = new User ('007', 'ricardo@email.com', 'Ricardo', 'ricardo123' )

console.log('UserId: ', myUser.getId())
console.log('UserName: ', myUser.getName())
console.log('UserEmail: ', myUser.getEmail())

const myCustomer: Customer = new Customer ('008', 'angela@email.com', 'Angela', '123angela', '1234 5678 9876 54')
myCustomer.introduceYourself()
console.log('Customer Id: ', myCustomer.getId());
console.log('Customer Name: ', myCustomer.getName());
console.log('Customer Email: ', myCustomer.getEmail());
console.log("Total gasto: ", myCustomer.purchaseTotal);
console.log('Customer Credcard: ', myCustomer.getCreditCard());
console.log(myCustomer.introduceYourself());

const employeeFirst : Employee = new Employee ('001',
 'luizcarlos@email.com',
  'Luiz Carlos',
   'l1c2m3t4',
    new Date(1585209600), 4000)
   employeeFirst.introduceYourself()

console.log(employeeFirst, employeeFirst.introduceYourself())
console.log('Total do Salario: ', employeeFirst.calculateTotalSalary())

const firstSeller : Seller = new Seller ('002', 'silvio@rmail.com', 'Silvio', 'silvio1010', new Date(1585209600), 3500)
firstSeller.introduceYourself()
console.log(firstSeller, firstSeller.introduceYourself())
