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

    //   public  addDeposit(amount : number){
    //         this._balance = this._balance + amount
    //     }

    // geter balance 

    
    public get Balance(){
        return this._balance
    }

   public set deposit (amount: number){
         this._balance = this._balance + amount
    }
    

    //    public getBalance(){
    //         return this._balance
    //     }

    }

    class StudentAccount extends BankAccount {
        test(){
            this._balance
        }
    }


    const gMAccount = new BankAccount(111, "gm", 201)
    // gMAccount.addDeposit(200)
    gMAccount.deposit = 1

    // const myBalance = gMAccount.getBalance()

    const myBalance = gMAccount.Balance;
    console.log(myBalance)

    // 
}