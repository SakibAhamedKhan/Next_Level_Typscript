type User = {
    name: string,
    age: number,
}

// Type Alias extends

interface IUser {
    name: string,
    age: number,
}

const userWithTypeAlias: User = {
    name: "Type Alias",
    age: 200,
}

const userWithInterface: IUser = {
    name: "Interface",
    age: 1200,
}

// Interface extends
interface IExtendedUser extends  IUser {
    role: string,
}

const Iuser2: IExtendedUser = {
    name: "IExtended",
    age: 400,
    role: "HR" 
}