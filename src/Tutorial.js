import React, { useState } from "react";
import "./index.css";

export const Tutorial = () => {
  //useStateは、クラスや関数内で宣言する
  const [count, setCount] = useState(0);

  //ボタンのクリック回数が10以上のときに表示する内容を変化させる
  const countCheck = () => {
    if (count < 10) {
      return "Push button 10 times or more.";
    }
    return 'The answer is "INSECT".'; //早期リターン
  };
  //色の設定とオンオフ設定
  const [light, setLight] = useState(true);
  const toggleLight = () => {
    setLight(!light);
  };
  const lightColor = light ? "#FFFF48" : "#000000";

  const divStyle = {
    backgroundColor: lightColor,
    fontFamily: "Montserrat", //できた、ボタンやplaceholder内の文字は変わらない
  };

  //電気のオンオフで表示する画像を変更
  const srcLightOn =
    "https://2.bp.blogspot.com/-QpIzYIhX_R0/VrN1H-ENQYI/AAAAAAAA3xU/v8lJEBoRMGA/s800/denkyuu_on.png";
  const srcLightOff =
    "https://2.bp.blogspot.com/-bB1KTaBEAm0/VrN1H-lrLFI/AAAAAAAA3xQ/2HKUMC-7kGw/s800/denkyuu_off.png";
  const srcLight = light ? srcLightOn : srcLightOff;

  //解答の入力内容をinsectにセット、テキストボックスが入力されたときにこの関数を呼び出し(onChange)
  const [answer, setAnswer] = useState("");
  const handleChange = ({ target }) => {
    setAnswer(target.value);
  };
  //解答が正しいかをチェック、Enterでsubmitされた際にこの関数を呼び出し(onSubmit)
  const answerCheck = () => {
    if (answer.toUpperCase() === "INSECT") {
      alert(`Congratulations! 'INSECT' is the correct answer!`);
    } else {
      alert(`'${answer}' is wrong answer. Please find the correct one.`);
    }
  };

  //好きなものに英語版のwikipediaのリンクを貼り、表示
  const faves = ["Riddle", "Insects", "Mahjong"];
  const favesWiki = faves.map((fave) => (
    <p>
      {fave}
      <a
        href={"https://en.wikipedia.org/wiki/" + fave}
        target="_blank"
        rel="noopener noreferrer"
      >
        <sub style={{ fontSize: "10px" }}>[wiki]</sub>

        <br />
      </a>
    </p>
  ));

  return (
    <div className="Tutorial" style={divStyle}>
      <h1>Find Answer in This Page!</h1>
      <p>
        <button onClick={() => setCount(count + 1)}>Push me!</button>
        <br />
        [You pushed {count} times]
      </p>
      <b>My Favorite</b>
      <br />
      {favesWiki}
      <p style={{ color: "#FFFF48" }}>
        <form onSubmit={answerCheck}>
          <input
            placeholder={"Input Answer"}
            onChange={handleChange}
            value={answer}
          />
          <button type="submit" disabled={answer === ""}>
            Check
          </button>
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
        Please Follow Me on{" "}
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
