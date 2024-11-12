{
    // 

    class BankAccount {
        public readonly id : number;
        public name: string;
        protected _balance: number;

        constructor(id:number, name:string, balance:number){
            this.id = id,
            this.name = name,
            this._balance = balance
        }

      public  addDeposit(amount : number){
            this._balance = this._balance + amount
        }

       public getBalance(){
            return this._balance
        }

    }

    class StudentAccount extends BankAccount {
        test(){
            this._balance
        }
    }


    const gMAccount = new BankAccount(111, "gm", 20)
    gMAccount.addDeposit(200)

    const myBalance = gMAccount.getBalance()
    console.log(myBalance)

    // 
}