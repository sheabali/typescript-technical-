{
    // mapped type 

    const arrOfNumbers : number[] = [1,2,3]

    const arrStrings : string[] = arrOfNumbers.map((number) => number.toString())
console.log(arrOfNumbers)

type AreaNumber = {
    heigth: number,
    width: number
};

type Heigth = AreaNumber['heigth']

type AreaString<T> = {
    [key in keyof T] : T[key]
}

const area : AreaString<{height: string, width: number}> = {
height: "32",
width: 93,
}


// 

}