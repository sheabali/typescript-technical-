{
//
    // type assertion
let anyithig : any;

anyithig  = "Next leve";


// (anyithig as string) 

anyithig = 222;

const kgTogm = (value:string | number) : number  | string | null 
| undefined => {

if(typeof value === 'string'){
    const convertedValue = parseFloat(value)*1000
    return `The converted value is  ${convertedValue}`
}

if(typeof value === "number"){
    return value *1000
}

}

const result1 = kgTogm(1000) as number
const result2 = kgTogm("1000") as string


type CustomError = {
    message:string
}

try{

} catch(error){
    console.log((error as CustomError).message)
}

//
}