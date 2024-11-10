{
// generic  constraint with keyof operator

type Vehicle = {
    bike :string,
    car :string,
    motorcycle: string
}

type Owner  = "bike | car | motorcycle"


type Owner2 = keyof Vehicle

const user = {
    name : "John",
    age: "16",
    address : "123",
}

const car = {
    model : "Toy",
    year: 2000
}


const getPropertyValue =<X,Y extends keyof X> (obj: X, key: Y) => {
return obj[key]
} 

const retult1 = getPropertyValue(user, "address")



// user.name = "John"


//
}