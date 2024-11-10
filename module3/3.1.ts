

{
    class Animal {

    constructor(public name:string,public specise: string,public sound: string){}

    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`)
    }
}

const dog = new Animal ("C bhai", "dog", "ghew ghew")
const cat = new Animal ("Pranto bhai", "cat","meaw meaw")
cat.makeSound()
//

}