{

    // union type

//     type FrontendDeveloper = 'fk' | 'jrd'
//     type FullstackDeveloper = 'fnt' | 'ed'
    
//     type Developer = FrontendDeveloper | FullstackDeveloper


//    const  newDeveloper : FrontendDeveloper = "jrd"

//    type User ={
//     name: string,
//     email?:string,
//     gender: "male" | "female",
//     bloodGroup: "O+"|"A+"|"AB+"
//    }

//    const user1: User ={
//     name:"pranto",
//     gender:"male",
//     bloodGroup:"AB+"
//    }


type FrontendDeveloper = {
    skills: string[],
    designation1: 'Frontend Developer'
}

type BackendDeveloper = {
    skills: string[],
    designation2: 'Frontend Developer'
}


type FullstackDeveloper = FrontendDeveloper & BackendDeveloper



}