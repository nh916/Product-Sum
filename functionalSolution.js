// o(n) time
// o(n) space depth
function solution(array, multiplier = 1) {
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] instanceof Array) {
            sum += solution (array[i], multiplier + 1)
        }

        else {
            sum = sum + array[i];
        }
    }
    return sum * multiplier;
}

const myArray = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

let result = solution(myArray);

console.log(result);
