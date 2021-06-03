const N = 100;

// 問題となる数字の列を初期化する
let numbers = [];
for (let i=2; i<=N; i++) {
    numbers.push(i);
}

// 素数一覧を格納する配列
let primes = [];

// アルキメデスのふるい本体
for (let i=0; i<numbers.length; i++) {
    if (numbers[i] == undefined) continue;

    primes.push(numbers[i]);
    for (let j=i+1; j<numbers.length; j++) {
        if (numbers[j] % numbers[i] == 0) numbers[j] = undefined;
    }
}

// 出力1
for (let prime of primes) {
    console.log(prime);
}

// 出力2 - primes無し版
for (let num of numbers) {
    if (num) console.log(num);
}
