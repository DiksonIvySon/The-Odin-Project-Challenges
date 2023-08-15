/* Using iteration, 
   write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. 
   Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13]. 
*/

let fibArray = [];

function fibs(number) {
    if (number === 0) {
        return ;
    }
    else if (fibArray.length === 0 && number >= 1) {
        fibArray.push(0);
        fibs(number);
    }
    else if (fibArray.length === 1 && number >= 2) {
        fibArray.push(1);
        fibs(number);
    }
    else if (fibArray.length > 2 && number >= 3) {
        for (let i = 2; i < number; i++) {
            fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
        }
        fibs(number);
    }

    return fibArray;
}

console.log(fibs(5));