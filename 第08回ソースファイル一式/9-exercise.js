
function sumStep2(num) {
    if (num <= 0) {
        return 0;
    } else {
        return num + sumStep2(num-2);
    }
}

let n = 20;
let result = sumStep2(n);
console.log("2, 4, 6, ... , " + n + " の総和: " + result);
