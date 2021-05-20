let i = 0;
let answer = 0;
while (i < 1000) {
    i++;
    answer = answer + Math.round(Math.random() * 10);
}
console.log(answer);
