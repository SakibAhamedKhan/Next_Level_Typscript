// Generic Interface

interface CrushInterface<T>{
    name: string,
    husband:T
}

const Crush1 : CrushInterface<Boolean> = {
    name: 'Sakib',
    husband: true
}

interface husbandInterface {
    salary:number,
    age: number,
}
const Crush2: CrushInterface<husbandInterface> = {
    name: 'Sakib',
    husband: {
        salary: 200,
        age: 23,
    }
}


interface CrushInterface2<T, U = null>{
    name: string,
    husband:T,
    wife?: U
}

const Crush3 : CrushInterface2<Boolean> = {
    name: 'Sakib',
    husband: true
}

interface husbandCrushInterface2 {
    role:string,
}
interface wifeCrushInterface2 {
    name:string,
}
const Crush4 : CrushInterface2<husbandCrushInterface2, wifeCrushInterface2> = {
    name: 'sak',
    husband: {
        role: 'hr'
    },
    wife: {
        name: 's'
    }
}

// // const rollNumber1: number[] = [3,2,1];
// const rollNumber1: Array<number> = [3,2,1];

// //const rollNumber2: string[] = ['22', '4', '34']
// const rollNumber2: Array<string> = ['22', '4', '34']
// const rollNumber3: Array<Boolean> = [true,false]

// const userNameAndRollNumbers: Array<{name: string, roll: number}> =[
//     {
//         name: 'sakib1',
//         roll: 1
//     },
//     {
//         name: 'rakib',
//         roll: 2
//     }
// ]

// // Generic Type
// type GenericArray<T> = Array<T>
// const rollNumber4: GenericArray<number> = [1,2,43,4]
// const rollNumber5: GenericArray<string> = ['23', '3','6']

// type NameRollType = {name: string, roll: number}

// const userNameAndRollNumbers2: GenericArray<NameRollType> =[
//     {
//         name: 'sakib1',
//         roll: 1
//     },
//     {
//         name: 'rakib',
//         roll: 2
//     }
// ]

// type GenericTuple<X,Y> = [X,Y]
// const relation: GenericTuple<string, string> = ['Sakib','Nothing']

// const relationWithSalary: GenericTuple<{name:string, salary:number}, string>=[
//     {
//         name: 'person',
//         salary: 4000,
//     },
//     "Sakib"
// ]