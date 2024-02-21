export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (deposit_value: number): void => {
    if(this.validateStatus()){
      this.balance += deposit_value
      console.log(`Você depositou ${deposit_value}`)
    }
  }

  withdraw = (withdraw_value: number): void => {
    if(this.validateStatus() && this.balance >= withdraw_value){
      this.balance -= withdraw_value
      console.log('Voce sacou')
    }

    else{
      throw new Error('Valor do saque está acima do valor que possui na conta.')
    }
    
  }

  getBalance = (): number => {
    return this.balance
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
