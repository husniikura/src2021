let ele = document.getElementsByClassName("fInfo").item(0);
let dd = ele.getElementsByTagName("dd").item(0);
let texts = dd.textContent.split("\n");
let address = texts.shift();
console.log("�Z���� [" + address + "] �ł��B");
texts.unshift("�v���O���~���O��b");
texts.unshift(address);
console.table(texts);
dd.innerHTML = texts.join("<br>\n");
