type MyInFoType = {
    name: string,
    age: number, 
    salary: number,
}

const myinfo: MyInFoType = {
    name: 'sakib',
    age: 23,
    salary: 500000000,
}

const addMeInMyCrush = <T>(info:T) => {
    const CrushMy = 'Kate winslet';
    const newData = {...info, CrushMy}
    return newData;
}
const result6 = addMeInMyCrush<MyInFoType>(myinfo);
console.log(result6);