let height = Math.round(Math.random() * 9) + 1;
let str = "";
for(let i = 1; i <= height; i++) {
    for(let j = 1; j <= height; j++) {
        str += "*";
    }
    str += "\n";
}
console.log(str);
