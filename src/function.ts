// normal funciton
function add(num1:number, num2:number=10):number {
    return num1+num2
}

add(30)
// arrow funciton
const addNum = (num1:number, num2:number):number => num1 + num2

const arr = [1,4,5]

const newArray = arr.map((e:number) => e*e)

const person: {
    name: string,
    balance: number,
    addBalance(money: number): void,
} = {
    name: 'Sakib',
    balance: 5,
    addBalance(money: number){
        console.log(`My New Balance is ${this.balance+money}`)
    }
}

// Spread Operators
const myFriends = ['chandle', 'joke', 'rose']
const newFriends = ['saika', 'rahim', 'tarek']

myFriends.push(...newFriends)

console.log(myFriends)

// rest parameters
const greetFriends = (...allFriends:string[]):void => {
    console.log(allFriends)
    allFriends.forEach(f=> console.log(`Hi ${f}`))
}

greetFriends("Kasem", "Takib", "Karim", "Rahim")


// array and object destructuring
const a = ["Sakib", "Rakib", "Takib"]

const [myName] = a
console.log(myName)

const b = {
    fullName: "Sakib Ahamed Khan",
    Ages: 24,
}
const { Ages } = b
console.log(Ages)