let answer = 0;
for (let i = 0; i < 1000; i++) {
    answer = answer + Math.round(Math.random() * 10);
}
console.log(answer);
