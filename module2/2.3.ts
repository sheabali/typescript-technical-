{

    // generic type 

    type GenericArray<T> = Array<T>

// const rollNumbers : number[] = [3,4,2,4]
const rollNumbers : GenericArray<number> = [3,4,2,4]

// const mentors : string[] = ["Mr.X", "Mr.Y", "Mr.Z"]
const mentors : GenericArray<string> = ["Mr.X", "Mr.Y", "Mr.Z"]


// const boolArray : boolean[] = [true, false, true]
const boolArray : GenericArray<boolean> = [true, false, true]


const add = (x: number, y:number) => x+y 

add(12,54)


const user :GenericArray<{name:string, age: number}> = [

    {name: "pranto",
    age: 23,
    },
    {
        name: "Jhankar Mahbub",
        age: 110,
    }
    
]

type GenericTuple <X,Y> = [X,Y]

const manush: GenericTuple<string,string> = ["Mr.X", "Mr. Y"]

const UserID: GenericTuple<number,{name:string, email:string}> = [1243, {name: "pranto", email:"a@gmail.com"}]


}