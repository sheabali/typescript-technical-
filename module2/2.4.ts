{
//

// interface -> generic 

interface Developer <T, X = null>{
    name: string,
    computer:{
        brand: string;
        model: string;
        releaseYear: number
    }
    smartWatch: T,
    bike?: X
}

type Aw = {
    brand: string,
    model: string,
    display:string
}

const poorDeveloper : Developer<Aw>={
name: "pranto",
computer: {
    brand: "Apple",
    model: "Macbook Pro",
    releaseYear: 2015
},
smartWatch: {
    brand: "Aw",
    model: "pr",
    display: "OLED"
}}

interface Bw {
    brand: string,
    model:string,
    display:string,
    heartTrack: boolean,
    sleepTrack: boolean
}

interface Bajaj {
model: string,
enginCapacity: string
}


const richDeveloper : Developer<Bw, Bajaj>={
    name: "Rich Dev",
    computer: {
        brand: "HP",
        model: "He",
        releaseYear: 2015
    },
    smartWatch: {
        brand: "Bw",
        model: "pr",
        display: "OLED",
        heartTrack: true,
        sleepTrack: true,
    },
    bike:{
        model: "Bajaj",
        enginCapacity: "100cc"
    }

}


//
}