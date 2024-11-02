{

// Type Alias 

type Student = {
 name: string,
 age: number,
 contactNo?: string,
 gender: string,
 address: string
}

const student1: Student = {
    name: "mi",
    age: 24,
    gender: "male",
    address: "dka"
}

const student2: Student = {
    name: "fi",
    age: 29,
    gender: "male",
    address: "dka"
}

const student3: Student = {
    name: "vi",
    age: 49,
    gender: "male",
    address: "dka"
}


type UserName = string
type IsAdmin = boolean

const userName:UserName = "Pranto"
const isAdmin: IsAdmin = true

type Add = (num1: number , num2: number) => number

const add: Add = (num1, num2 ) => num1 + num2;





}