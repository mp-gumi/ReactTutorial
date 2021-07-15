import React, { useState } from "react";

export const Tutorial = () => {
  //useStateは、クラスや関数内で宣言する
  const [count, setCount] = useState(0);

  //ボタンのクリック回数が5以上のときに表示する内容を変化させる
  function countCheck() {
    let returnText;
    if (count < 10) {
      returnText = "Push button 10 times or more.";
    } else {
      returnText = 'The answer is "INSECT".';
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
  //解答の入力内容をinsectにセット、テキストボックスが入力されたときにこの関数を呼び出し(onChange)
  const [insect, setInsect] = useState("");
  const handleChange = ({ target }) => {
    setInsect(target.value);
  };
  //解答が正しいかをチェック、Enterでsubmitされた際にこの関数を呼び出し(onSubmit)
  const answerCheck = () => {
    if (insect === "") {
      alert("Your answer is empty.");
    } else if (insect.toUpperCase() === "INSECT") {
      alert(`Congratulations! ${insect.toUpperCase()} is the correct answer!`);
    } else {
      alert(`${insect} is wrong answer.`);
    }
  };

  return (
    <div className="Tutorial" style={divStyle}>
      <h1>Find Answer!</h1>
      <p>
        <button onClick={() => setCount(count + 1)}>Push me!</button>
      </p>
      <p>You pushed {count} times!</p>
      <br />
      <h4>My Favorite</h4>
      <ul>
        <li>謎解き</li>
        <li>昆虫</li>
        <li>麻雀</li>
      </ul>
      <p style={{ color: lightOn }}>
        <form onSubmit={answerCheck}>
          <input
            placeholder={"Input Answer"}
            onChange={handleChange}
            value={insect}
          />
        </form>
        {countCheck()}
      </p>
      <img
        onClick={toggleLight}
        src={srcLight}
        alt={"light_bulb"}
        width={"100px"}
      />
      <br />
      <p>
        Please Follow me on{" "}
        <a
          href={"https://twitter.com/mp_gumi"}
          target="_blank" //リンクを別タブで開く
          rel="noopener noreferrer" //タブを開いたあとに、リンク先から参照できないようにする(セキュリティ上の観点)
        >
          Twitter!
        </a>
      </p>
    </div>
  );
};
