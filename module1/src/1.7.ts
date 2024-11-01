{
    
// spread operator
// rest operator
// destructuring 


const bors1 :string[] = ["A, B, C"] 
const bors2 :string[] = ["D, E, F"]

bors1.push(...bors2)

const mentors1 = {
    typescript: "M",
    redux: "F",
    dbms: "M"
}


const mentors2 = {
    prisma: "F",
    redux: "T",
    dbms: "N"
}

const mentorsList  = {
    ...mentors1,
    ...mentors2
} 

// learn rest operator

const greetFriends = (...friends:string[]) => {
friends.forEach((friend:string) => {
    console.log(`Hi ${friend}`)
});
}

greetFriends("D,B,C,D")

}