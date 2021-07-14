import React, { useState } from "react";

export const Tutorial = () => {
  //useStateは、クラスや関数内で宣言する
  const [count, setCount] = useState(0);

  //ボタンのクリック回数が5以上のときに表示する内容を変化させる
  function countCheck(count) {
    let returnText;
    if (count < 5) {
      returnText = "Push upper button 5 times.";
    } else {
      returnText = 'The answer is "WATER".';
    }
    return returnText;
  }
  //色の設定とオンオフ設定
  const lightOn = "#FFFF48";
  const lightOff = "#000000";
  const [light, setLight] = useState(lightOn);
  const divStyle = { backgroundColor: light };
  function toggleLight() {
    if (light === lightOn) {
      setLight(lightOff);
    } else {
      setLight(lightOn);
    }
  }

  //電気のオンオフで表示する画像を変更
  let srcLight;
  if (light === lightOn) {
    srcLight =
      "https://2.bp.blogspot.com/-QpIzYIhX_R0/VrN1H-ENQYI/AAAAAAAA3xU/v8lJEBoRMGA/s800/denkyuu_on.png";
  } else {
    srcLight =
      "https://2.bp.blogspot.com/-bB1KTaBEAm0/VrN1H-lrLFI/AAAAAAAA3xQ/2HKUMC-7kGw/s800/denkyuu_off.png";
  }

  return (
    <div className="Tutorial" style={divStyle}>
      <h1>My Profile</h1>
      <p>
        <button onClick={() => setCount(count + 1)}>Push me!</button>
      </p>
      <p>You pushed {count} times!</p>
      <p>
        Please Follow me on　
        <a
          href={"https://twitter.com/mp_gumi"}
          target="_blank" //リンクを別タブで開く
          rel="noopener noreferrer" //タブを開いたあとに、リンク先から参照できないようにする
        >
          Twitter!
        </a>
      </p>
      <ul>
        My Favorite
        <li>謎解き</li>
        <li>脱出ゲーム</li>
        <li>昆虫</li>
        <li>麻雀</li>
      </ul>
      <img
        onClick={toggleLight}
        src={srcLight}
        alt={"light_bulb"}
        width={"100px"}
      />

      <p style={{ color: lightOn }}>
        <input placeholder={"Find Answer"} />
        {countCheck()}
      </p>
    </div>
  );
};
