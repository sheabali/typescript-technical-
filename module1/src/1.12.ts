{

// nullable types | unknown type

const searchName = (value:string | null) => {
    if(value){
        console.log('Searching')

    }
    else{
        console.log("There is nothing to searching")
    }
}

searchName(null)


const getSpeedInMeterPerSecond = (value: unknown) => {
    if(typeof value === "number"){
        const convertedSpeed = ((value*1000)/3600)
        console.log(`The speed is ${convertedSpeed} ms^-2`)
    }

    else if(typeof value == "string") {
        const [result, unit] = value.split(" ")
        const convertedSpeed = (parseFloat(result) * 1000) / 3600
        console.log(`The speed is ${convertedSpeed} ms^-2`)
    }
    else{
        console.log("wrong input")
    }
}

getSpeedInMeterPerSecond(null)


const throwError = (msg: string): never => {

    throw new Error(msg);
    
}

throwError("mushkil se error hogaya")


// 
}