let width;
let height = Math.round(Math.random() * 9) + 1;
let str = "";
for(let i = 1; i <= height; i++) {
    width = Math.round(Math.random() * 9) + 1;
    for(let j = 1; j <= width; j++) {
        str += "*";
    }
    str += "\n";
}
console.log(str);
