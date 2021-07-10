//画面がロードされた時の処理関数。
function init() {
    //外側のdiv要素を取得。
    let outerBox = document.getElementById("outerBox");
    //div要素内をマウスが移動したときの処理。
    outerBox.addEventListener("mousemove", function(event) {
        //内側のp要素を取得。
        let innerBox = document.getElementById("innerBox");
        //内側のp要素にマウスのdiv要素内座標を表示。
        innerBox.textContent = "x=" + event.offsetX + ":y=" + event.offsetY;
    });
}

//画面がロードされた時の処理をリスナ登録。
window.addEventListener("DOMContentLoaded", init);
