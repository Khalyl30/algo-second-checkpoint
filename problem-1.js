


function sumOfDistinctElements(arr1, arr2) {
    const duplicates = [];
    const distinct = [];

    // Check for duplicates in arr1
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) == true && duplicates.includes(arr1[i]) == false) {
            duplicates.push(arr1[i]);
        } else if (duplicates.includes(arr1[i])== false) {
            distinct.push(arr1[i]);
        }
    }

    // Check for duplicates in arr2 and add distinct elements to the distinct array
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.includes(arr2[i]) == false && duplicates.includes(arr2[i]) == false) {
            distinct.push(arr2[i]);
        }
    }

    let sum = 0;

    for (let i = 0; i < distinct.length; i++) {
        sum += distinct[i];
    }

    return sum;
}

// Example usage
const arr1 = [3, 1, 7, 9];
const arr2 = [2, 4, 1, 9, 3];
const result = sumOfDistinctElements(arr1, arr2);
console.log(result);
