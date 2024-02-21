import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Geana', 10)
console.log(peopleAccount)
peopleAccount.deposit(1000)
console.log(peopleAccount.getName())
console.log(peopleAccount.getBalance())
peopleAccount.withdraw(500)
console.log(peopleAccount.getBalance())

console.log('************************************************************')

const companyAccount: CompanyAccount = new CompanyAccount('Julia', 11)
console.log(companyAccount)
companyAccount.deposit(2000)
console.log(companyAccount.getName())
console.log(companyAccount.getBalance())
companyAccount.withdraw(1000)
console.log(companyAccount.getBalance())

console.log('************************************************************')
const specialAccount: SpecialAccount = new SpecialAccount('Carlos', 12)
console.log(specialAccount)
specialAccount.depositSpecial(2000)
console.log(specialAccount.getName())
console.log(specialAccount.getBalance())
specialAccount.withdraw(1000)
console.log(specialAccount.getBalance())
