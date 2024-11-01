{
    // Learning function 

// Normal Function
// Arrow Function 

function add(num1: number, num2:number = 10): number {
    return num1 + num2;
}
add(2,"2")

const addArrow = (num1 :number, num2 :number) :number =>num1+num2

// object --> function --> method

const poorUser = {
    name: "pranto",
    balance: 114,
    addBalance(balance:number):string {
        return `My new balance ${this.balance + balance}`
    }
    
}

const arr : number[] = [1,4,8]

const newArray = arr.map((elem:number):number => elem *elem )
}
// end