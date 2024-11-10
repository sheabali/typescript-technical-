{
    // mapped type 

    const arrOfNumbers : number[] = [1,2,3]

    const arrStrings : string[] = arrOfNumbers.map((number) => number.toString())
console.log(arrOfNumbers)

type AreaNumber = {
    heigth: number,
    width: number
};

type AreaString = {
    [key in keyof AreaNumber] : boolean
}


// 

}