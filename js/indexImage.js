window.onload = function (){
  var timer1 = null;

  function chengeImage(){
    let image = document.getElementById('targetImage');

    if(image.style.opacity == ''){
      image.style.opacity = 1; // cssでopacityを設定していない場合に設定する。
    }
    // 透明度を設定する
    let opacityInt = image.style.opacity * 100;
    // フェードアウト処理
    let intervalId = setInterval( () => {
      opacityInt = opacityInt - 10;
      image.style.opacity = opacityInt / 100;

      if(image.style.opacity == 0){ // 透明度が0になった場合
        clearInterval(intervalId);
        //画像を交換
        if(image.src === "file:///Users/takatamasahiro/tully's_demo/Tullys-Demo/images/ae26e88550b587545778b941fd256d371df62a5d.jpg"){
          image.src = "file:///Users/takatamasahiro/tully's_demo/Tullys-Demo/images/PC_MV_NewGoods210506PC_MV_NewGoods210506.jpg";
        }else{
          image.src = "file:///Users/takatamasahiro/tully's_demo/Tullys-Demo/images/ae26e88550b587545778b941fd256d371df62a5d.jpg";
        }
        // フェードイン処理
        opacityInt = image.style.opacity * 100;
        //フェードインの処理（opacityを100ミリ秒ごとに0.1づつ増やす）
        intervalId = setInterval( () => {
          opacityInt = opacityInt + 10;
          image.style.opacity = opacityInt / 100;

          if(image.style.opacity >= 1){
            clearInterval(intervalId);
          }
        }, 100);
      }
    }, 100); // 100ミリ秒ごとに実行する
  }

  timer1 = setInterval(chengeImage, 6000);
};