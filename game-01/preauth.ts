/**
 * @remarks
 * Returns an array of the first possible solution of sum result array.
 * 
 * @param {number[]} items
 * @param {number} result
 * @returns {number[]}
 */
 export function getSumResultArray(items: number[], result:number): number[] {

    let sumValues:number[] = [];
    let auxArray:number[] = items;
    let flag:boolean = false;

    for (let item of items) {
        auxArray = auxArray.slice(1);
        let currentValue = item;

        for (let aux of auxArray) {
            let sum = currentValue + aux;
            if(sum === result) { sumValues.push(currentValue, aux); flag = true; break; }
        }

        if(flag) {
            break;
        }
    }
    
    if(sumValues.length == 0)
    {
        let existsValue:boolean = (items.some(x => x === result));
        if(existsValue) sumValues.push(result);
    }

    return sumValues;
}

// let arrayValues:Array<number> = [2, 5, 8, 14, 0];
// let arrayValues:Array<number> = [1,2,3,4,5];
// let finalValue:number = 7;

// let sxs = getSumResultArray(arrayValues, finalValue);

// console.log(sxs);

// let stringArray:string = "1,2,3,4,5";

// var arrayNew:number[] = stringArray.split(",").map(Number);
// console.log(arrayNew);

export function validateTestAuthOne():void{

    let inputArrayValuesEntry:string = (<HTMLInputElement>document.getElementById("arrayValues")).value;

    if (inputArrayValuesEntry.length === 0) {setTextForResult('The value array values must be inserted'); return;}

    let inputSumValuesEntry:number = parseInt((<HTMLInputElement>document.getElementById("sumValues")).value) || -1;

    if (inputSumValuesEntry < 0) {setTextForResult('The value sum entry values must be inserted'); return;}

    let arrayNewValues:number[] = inputArrayValuesEntry.split(",").map(Number);

    if (arrayNewValues.length == 0) {setTextForResult('The values doesnot have a correct format please review it.'); return;}

    let finalResult:number[] = getSumResultArray(arrayNewValues, inputSumValuesEntry);

    if (finalResult.length == 0) {setTextForResult('The values doesnot exists combination for the sum '); return;}

    setTextForResult(finalResult.toString());
}

function setTextForResult(text : string) : void{
    (<HTMLInputElement>document.getElementById("result")).innerHTML = text;
}