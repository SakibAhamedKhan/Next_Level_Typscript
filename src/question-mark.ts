// ternary operator
const  age: number = 22

// if(age>=18){
//     console.log("YES")
// } else {
//     console.log("NO")
// }

const isAdult = age>=18 ? "YES" : "NO"
console.log(isAdult);

//Nullish coalescing operator
//Null and Undefined
//const isAuthenticateUser = null // Null or Undefine hole "Guest" onnothai jeyta assign kora hobe seyta return korbe
const isAuthenticateUser = "Sakib"
const userName = isAuthenticateUser ?? 'Guest'
console.log(userName)

type Manush = {
    name: string,
    age: number,
    address: {
        city: "No city",
        road: "No road",
        home? : ""
    }
}
const manush1: Manush = {
    name: "Sakib",
    age: 24,
    address: {
        city: "No city",
        road: "No road",
    }
}

const home = manush1?.address?.home ?? "No home"
console.log(home)

function generateAdder(a: number): (b: number) => number {

    return function(b: number) {
  
      return a + b;
  
    };
  
  }
  
  
  
  const addTwo = generateAdder(2);
  
  console.log(addTwo(3));
  
  console.log(addTwo(5));
