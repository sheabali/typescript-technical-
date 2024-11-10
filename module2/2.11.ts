{
    //  utility types

type Person = {
    name: string,
    age: number,
    email?: string,
    contactNo: string
}

// Pick
type NameAge = Pick<Person, "name"|"age">

// Omit
type ContctInfo = Omit<Person, "name"| "age">

// Required 
type PersonRequired = Required<Person>

// Partial 
type PersonPartial = Partial<Person>

// ReadOnly 
const person1 : Person = {
name: "Mr. S",
age: 32,
contactNo: "015"
}

person1.name = "Mr. P"

// Record
// type MyObj = {
//     a:string,
//     b:string
// }
type MyObj = Record<string, number>

const EmptyObj : Record<string,unknown> = {}

const obj1: MyObj = {
    a:"aa",
    b:'b',
    c:"cc",
    d:4
}





    // 
}