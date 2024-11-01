// Reference Type --> Object

const user : {
    readonly company: string, // type --> literal types
    firstName: string,
    middleName: string,
    lastName?: string,
    isMarried: boolean
} = {
    company: "toto company",
    firstName: "Sheikh",
    middleName: "Pranto",
    // lastName: ,
    isMarried: false
}

// user.company = "aa"