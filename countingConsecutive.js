/*
Given an array of characters return a string that counts the number of each consecutive letter.

Example: [“a”, “b”, “b”, “a”] should return “a1b2a1”
*/
function countConsecutive(arr) {
    let count = 1;
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            count++;
        } else {
            result += arr[i] + count;
            count = 1;
        }
    }
    return result;
}   
console.log(countConsecutive(["a", "b", "b", "a"]));