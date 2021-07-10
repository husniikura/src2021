//画面がロードされた時の処理関数。
function init() {
  kaito1();
  kaito2();
}

function kaito1() {
  let memo = document.getElementById("memo");
  memo.addEventListener("input", function(event) {
    let text = event.target.value;
    debugger;
    let countSpan = document.getElementById("count");
    countSpan.innerText = text.length;
  });
}

function kaito2() {
  let cancelButton = document.getElementById("cancelButton");
  cancelButton.addEventListener("click", function(event) {
    let radios = document.getElementsByName("fruit");
    debugger
    for(let i=0; i<radios.length; i++) {
      radios[i].checked = false;
    }
  });
}

//画面がロードされた時の処理をリスナ登録。
window.addEventListener("DOMContentLoaded", init);
