type PersonType = {
    name: string,
    age: number,
    address: string,
}

type newType = "name" | "age" | "address"; // manually korsi

type newTypeUsingKeyOf = keyof PersonType // keyof diye easily kore felci

const a1 : newType = 'age'
const a2 : newTypeUsingKeyOf = 'address'


function getProperty<X, Y extends keyof X>(obj: X, key:Y){
    obj[key];
}
const properyResult = getProperty({name: "Mr.x", age: 100} , "age")