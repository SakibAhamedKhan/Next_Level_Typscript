
// Mocking (Mocking kono server theke data anteci nah , amra nijera data baniye practice korteci seyta Mocking bola hoy)
const makePromise = () : Promise<string> => {
   return  new Promise<string>((resolve, reject)=>{
        const data : string = "Data is fetched"
        if(data) {
            resolve(data)
        } else {
            reject('Failed to fetch data')
        }
    })
};

// const getPromiseData =async () : Promise<string> => {
//     const data = await makePromise()
//     console.log(data);
    
// }

// getPromiseData();


// fetch from orginal link
interface ITodo  {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }
const getTodo = async() : Promise<ITodo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return   await response.json();

}

const getToDoData = async() : Promise<void> => {
    const result8 = await getTodo();
    console.log(result8);
    
}

getToDoData();