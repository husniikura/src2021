"use strict";

function fact(num) {
    console.log(`fact(${num}) が呼び出されました。`);
    if (num == 0) {
        return 1;
    } else {
        return num * fact(num-1);
    }
}

let n = 5;
let result = fact(n);
console.log(n + "の階乗: " + result);
