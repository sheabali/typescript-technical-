{
    // ternary operator || optional chaning || nullish coalescing operator

    const age: number = 18;

    if (age >= 18 ) {
        console.log("Adult")
    }else{
        console.log("Not Adult")
    }


    // nullish coalescing operator
    // null / undefined --> decision making

    const isAuthenticated = '';

    const result = isAuthenticated ?? "Guest"

    const result2 = isAuthenticated ? isAuthenticated : "Guest"


    type User = {
        name: string,
        address:{
            city: string,
            road: string,
            presentaddress: string,
            permanentaddress?:string
        }
    }

    const user: User = {
        name: "pranto",
        address: {
            city:"jhenaidah",
            road: "Aswome Road",
            presentaddress: "jh town"
        }
    }

    const permanentaddress = user?.address?.permanentaddress ?? "No Permanen Address"



    console.log({result},{result2}, {permanentaddress})


















    // 
}