// 1
function flattenArray(arr) {
    let result = [];

    arr.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else {
            result.push(item);
        }
    });

    return result;
}

const nestedArray = [1, [2, 3, [4, 5]], 6];
console.log(flattenArray(nestedArray));


// 2
function multiplyExceptSelf(arr) {
    const length = arr.length;
    const result = new Array(length).fill(1);

    let leftProduct = 1;
    for (let i = 0; i < length; i++) {
        result[i] = leftProduct;
        leftProduct *= arr[i];
    }

    let rightProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= arr[i];
    }

    return result;
}

const inputArray = [1, 2, 3, 4];
console.log(multiplyExceptSelf(inputArray));
