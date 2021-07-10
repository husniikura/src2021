let ele = document.getElementsByClassName("fInfo").item(0);
let dd = ele.getElementsByTagName("dd").item(0);
let texts = dd.textContent.split("\n");
let address = texts.shift();
console.log("住所は [" + address + "] です。");
texts.unshift("プログラミング基礎");
texts.unshift(address);
console.table(texts);
dd.innerHTML = texts.join("<br>\n");
