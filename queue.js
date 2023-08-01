// function add new item to the list and remove and return the first item of list
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

let testArr = [1,2,3,4,5]
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));