// const rollNumber1: number[] = [3,2,1];
const rollNumber1: Array<number> = [3,2,1];

//const rollNumber2: string[] = ['22', '4', '34']
const rollNumber2: Array<string> = ['22', '4', '34']
const rollNumber3: Array<Boolean> = [true,false]

const userNameAndRollNumbers: Array<{name: string, roll: number}> =[
    {
        name: 'sakib1',
        roll: 1
    },
    {
        name: 'rakib',
        roll: 2
    }
]

// Generic Type
type GenericArray<T> = Array<T>
const rollNumber4: GenericArray<number> = [1,2,43,4]
const rollNumber5: GenericArray<string> = ['23', '3','6']

type NameRollType = {name: string, roll: number}

const userNameAndRollNumbers2: GenericArray<NameRollType> =[
    {
        name: 'sakib1',
        roll: 1
    },
    {
        name: 'rakib',
        roll: 2
    }
]

type GenericTuple<X,Y> = [X,Y]
const relation: GenericTuple<string, string> = ['Sakib','Nothing']

const relationWithSalary: GenericTuple<{name:string, salary:number}, string>=[
    {
        name: 'person',
        salary: 4000,
    },
    "Sakib"
]