/**
 * Returns an array of the first possible solution of sum result array.
 *
 * @param {number[]} items
 * @param {number} result
 * @returns {number[]}
 */
function getSumResultArray(items, result) {
    var sumValues = [];
    var auxArray = items;
    var flag = false;
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        auxArray = auxArray.slice(1);
        var currentValue = item;
        for (var _a = 0, auxArray_1 = auxArray; _a < auxArray_1.length; _a++) {
            var aux = auxArray_1[_a];
            var sum = currentValue + aux;
            if (sum === result) {
                sumValues.push(currentValue, aux);
                flag = true;
                break;
            }
        }
        if (flag) {
            break;
        }
    }
    if (sumValues.length == 0) {
        var existsValue = (items.some(function (x) { return x === result; }));
        if (existsValue)
            sumValues.push(result);
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
function validateTestAuthOne() {
    var inputArrayValuesEntry = document.getElementById("arrayValues").value;
    if (inputArrayValuesEntry.length === 0) {
        setTextForResult('The value array values must be inserted');
        return;
    }
    var inputSumValuesEntry = parseInt(document.getElementById("sumValues").value) || -1;
    if (inputSumValuesEntry < 0) {
        setTextForResult('The value sum entry values must be inserted');
        return;
    }
    var arrayNewValues = inputArrayValuesEntry.split(",").map(Number);
    if (arrayNewValues.length == 0) {
        setTextForResult('The values doesnot have a correct format please review it.');
        return;
    }
    var finalResult = getSumResultArray(arrayNewValues, inputSumValuesEntry);
    if (finalResult.length == 0) {
        setTextForResult('The values doesnot exists combination for the sum ');
        return;
    }
    setTextForResult(finalResult.toString());
}
function setTextForResult(text) {
    document.getElementById("result").innerHTML = text;
}
