const arrayOfNumbers = [1, 2, 3]; // ['1', '2', '3']

// we to convert the int array to string array
const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfStrings);

type AreaNumber = {
  height: number;
  width: number;
};

// const obj = {
//     name: 'Sakib'
// }
// obj['name']
type a = AreaNumber["height"]; // looked up type
type b = keyof AreaNumber; // 'width' | 'height'

type AreaString = {
    height: string;
    width: string;
};

const retangularArea: AreaNumber = {
    height: 10,
    width: 12,
}

retangularArea.width = 20

console.log(retangularArea);

// read only
type AreaReadOnly = {
   readonly height: number;
   readonly width: number;
}

const rectangularAreaReadOnly: AreaReadOnly = {
    height : 25,
    width: 40,
}
// rectangularAreaReadOnly.height = 10 // it's give error readonly type can not update , you can just readonly
console.log(rectangularAreaReadOnly);


type volumn = {
    height: number;
    width: number;
    depth: number;
}
type Area = {
    [key in keyof volumn] : string // mapped type 
}

type volumn2 = {
    height: string;
    width: number;
    depth: string;
}
type Area2 = {
    [key in keyof volumn2] : volumn2[key] // mapped type
}

// generic
type volumn3 = {
    height: string;
    width: number;
    depth: string;
}
type Area3<T> = {
   readonly [key in keyof T] : T[key] // mapped type
}

const area3 : Area3<{name: string, age: number, area: string}> ={name:'sakib', age: 23, area: 'chittagong'}


