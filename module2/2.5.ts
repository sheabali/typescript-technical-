{
// 
//function with generics

const createArray = (param : string) => {   
// return new Array(param
return  [param]
}

const createArrayWithGeneric = <T>(param : T): T[] =>{
    return [param]
}

const res1 = createArray('bangladesh')
const resGeneric = createArrayWithGeneric<string>('bangladesh')

type User = {id: number, name: string}

const resGenericObj = createArrayWithGeneric <User>({
    id: 222,
    name: 'Ali',
    
})

const createArrayWithTuple = <T>(param : T): T[] =>{
    return [param]
}

const res1 = createArray('bangladesh')
const resGeneric = createArrayWithGeneric<string>('bangladesh')

type User = {id: number, name: string}

const resGenericObj = createArrayWithGeneric <User>({
    id: 222,
    name: 'Ali',
    
})

}