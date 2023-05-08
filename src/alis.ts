type CrushType = {
    name:string,
    age?:number, // optional type
    profession: string,
    address: string,
} 

const crush1: CrushType = {
    name: "Saira",
    age: 22,
    profession: 'Student',
    address: 'Dhaka',
}

const crush2: CrushType = {
    name: "Sariya",
    profession: 'Student',
    address: 'Ctg',
}

type CrushMarriedType = boolean
const  isCrushMarried: CrushMarriedType = false
