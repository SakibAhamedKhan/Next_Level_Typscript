// Arrow funciton
const createArray = (param:string):string[] => {
    return [param]
}

const createArray1 = <T>(param:T):T[] => {
    return [param]
}


const result1 = createArray("bangladesh")
const result2 = createArray1<number>(2)
const result3 = createArray1<Boolean>(false)
const result4 = createArray1<object>({name: 'sakib', age: 20})

type createArray1Object = {
    name: string
}
const result5 = createArray1<createArray1Object>({name: 'sakib'})


const createArray2 = <X,Y>(param1:X, param2: Y): [X,Y] => {
    return [param1, param2]
}

// Spread Operator



// const myinfo = {
//     name: 'sakib',
//     age: 23,
//     salary: 500000000,
// }

// const addMeInMyCrush = <T>(info:T) => {
//     const CrushMy = 'Kate winslet';
//     const newData = {...info, CrushMy}
//     return newData;
// }

// const result6 = addMeInMyCrush(myinfo);
// console.log(result6);


// Normal funciton
function createNormalArray1<T>(param:T):T[]{
    return [param]
}

function createNormalArray2 <X,Y>(param1:X, param2: Y): [X,Y] {
    return [param1, param2]
}

