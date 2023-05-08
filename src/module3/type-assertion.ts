let emni: any;

emni = "Next level web development";

(emni as string).length;

function kgToGram(param: string|number):string|number|undefined{
    if(typeof param ==="string"){
        const value = parseFloat(param)*100;
        return `The Converted result is: ${value} gram`
    }
    if(typeof param ==="number"){
        const value = param*100;
        return value;
    }
}

const resultToBeNumber = kgToGram(34) as number;
console.log(resultToBeNumber);
const resultToBeString = kgToGram(34) as string;
console.log(resultToBeString);


